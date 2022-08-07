function digitize(n) {
    //code here
    let array = (""+n).split("").map(Number)
    let resArray = []
    for (let i = array.length-1; i >= 0; i--) {
        resArray.push(array[i])
    }
    return resArray
}

console.log(digitize(35231))