var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);

    if (className === 'fruit-image') {
        element.src = fruits[i].imgSrc;
        element.alt = fruits[i].title;
    } else {
        element.textContent = text;
    }

    if (tagName === 'a') {
        element.href = '#';
        element.textContent = 'Добавить';
    }

    return element
};
var createCard = function (item) {
    var element = document.createElement('li');
    element.classList.add('list-item');
    element.id = i + 'n';

    var fruitImg = makeElement('img', 'fruit-image');
    element.appendChild(fruitImg);

    var title = makeElement('h1', 'title', item.title);
    element.appendChild(title);

    var privet = makeElement('p', 'content', item.text);
    element.appendChild(privet);

    var doctor = makeElement('p', 'price', item.price);
    doctor.style.textDecoration = 'line-through';
    element.appendChild(doctor);

    var tokiysliy = makeElement('p', 'sale-price', item.salePrice);
    element.appendChild(tokiysliy);

    var fruitLink = makeElement('a', 'button');
    fruitLink.id = i;
    element.appendChild(fruitLink);

    if (!item.isSale) {
        tokiysliy.style.display = 'none';

        doctor.style.textDecoration = 'none';
    }

    console.log(element);

    return element
};
var createBasketElement = function (item) {
    var basketItem = document.createElement('li');
    basketItem.classList.add('basket-item');

    var miniTitle = makeElement('h1', 'mini-title', item.title);
    basketItem.appendChild(miniTitle);

    var price = makeElement('p', 'mini-price', item.price);
    price.style.textDecoration = 'line-through';
    basketItem.appendChild(price);

    

    if (item.salePrice != undefined) {
        var salePrice = makeElement('p', 'mini-sale-price', item.salePrice);
        basketItem.appendChild(salePrice);
    }


    if (!item.isSale) {
        salePrice.style.display = 'none';

        price.style.textDecoration = 'none';
    }

    var deleteBasketElement = makeElement('a', 'mini-delete');
    var trashIcon = makeElement('img', 'trash-icon');
    trashIcon.src = 'images/delete.png';
    trashIcon.width = '20';
    deleteBasketElement.textContent = '';
    deleteBasketElement.appendChild(trashIcon);
    basketItem.appendChild(deleteBasketElement);

    console.log(basketItem);

    return basketItem
}
var fruitList = document.querySelector('.fruit-list');

var fruits = [
    {
        title: 'клубника',
        text: 'красная, много косточек',
        price: '$ 20 USD',
        salePrice: '$ 10 USD',
        imgSrc: 'images/pngwing.com.png',
        isSale: false,
    },
    {
        title: 'абрикос',
        text: 'маленький персик',
        price: '$ 100 USD',
        salePrice: '$ 150 USD',
        imgSrc: 'images/Абрикос.png',
        isSale: true,
    },
    {
        title: 'арбуз',
        text: 'бооооль всех ягод',
        price: '$ 1000 USD',
        salePrice: '$ 300 USD',
        imgSrc: 'images/pngwing.com (1).png',
        isSale: true,
    },
    {
        title: 'арбуз',
        text: 'бооооль всех ягод',
        price: '$ 1000 USD',
        salePrice: '$ 2000 USD',
        imgSrc: 'images/pngwing.com (1).png',
        isSale: true,
    }
];

for (var i = 0; i < fruits.length; i++) {
    fruitList.appendChild(createCard(fruits[i]));
};


var fruitLink = fruitList.querySelectorAll('.button');
let fruitLinkId = []

for (let i = 0; i < fruitLink.length; i++) {
    console.log(fruitLink[i].id);
    fruitLinkId.push(fruitLink[i].id);
}

// console.log(fruitLinkId);
// for (let i = 0; i < fruitLinkId.length; i++) {
//     console.log(fruits[i]);
// }




// fruitLink.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     basketItems.appendChild(createBasketElement(fruitLink));
// });

var basketItem = []

let fruitListener = function (elem, index) {
    elem.addEventListener('click', function () {
        basketItems.appendChild(createBasketElement(fruits[index]));
        basketItem.push(index);
        console.log(basketItem);
    });
}

console.log('ffffff');

var basketInner = document.querySelector('.basket-inner');

var basket = document.querySelector('.basket');

var basketItems = document.querySelector('.basket-items');

var basketContent = basketItems.querySelectorAll('.basket-item');

var deleteButton = document.querySelectorAll('.mini-delete');
var deleteButtonId = [];

for (var i = 0; i < deleteButton.length; i++) {
    deleteButtonId.push(deleteButton[i].id);
}
console.log('deleteButtonId');
for (let i = 0; i < fruitLinkId.length; i++) {
    fruitListener(fruitLink[i], i);
}

for (let i = 0; i < deleteButtonId.length; i++) {
    deleteListener(deleteButton[i], i);
}

basket.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (basketInner.style.display == 'none') {
        basketInner.style.display = 'block';
    } else {
        basketInner.style.display = 'none';
    };
})

console.log(basketItems);

var deleteListener = function (elem, index) {
    elem.addEventListener('click', function () {
        basketItems.basketButton[index].remove();
        console.log('+');
    });
}

