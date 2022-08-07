function getSum(a,b){
    if (a === b){
        return a;
    }else if (a > b){
        return a + getSum(a-1,b)
    } else {
        return a + getSum(a+1,b)
    }
}

console.log(getSum(1, 0))
console.log(getSum(1, 2))
console.log(getSum(0, 1))
console.log(getSum(-1, 0))
console.log(getSum(-1, 2))