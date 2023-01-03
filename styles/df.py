print(int(str(101010010),2))
def from10toss(x,ss){
    d=0
    t=1
    d=d+(x%ss)*t
    t=t*10
    x=x//ss
    return d
}
print(from10toss(42,2))