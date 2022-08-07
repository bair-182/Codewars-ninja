function descendingOrder(n){
    //...
    if (n < 0 ) return "Давай положительное число."
    if (n === 0 ) return 0
    let array = (""+n).split("").map(Number)
    let resArray = []

    while (array.length !== resArray.length) {
        let max = array.indexOf(Math.max.apply(Math, array))
        for (let i = 0; i < array.length; i++) {
            if (i === max) {
                resArray.push(array[i]);
                array[i] = null
            }
        }
    }
    return parseFloat(resArray.join(""))
}

console.log( descendingOrder(42145) )
console.log( descendingOrder(0) )
console.log( descendingOrder(1) )
console.log( descendingOrder(145263) )
console.log( descendingOrder(123456789) )