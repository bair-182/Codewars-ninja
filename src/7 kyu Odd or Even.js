function oddOrEven(array) {
    //enter code here
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return (sum % 2 === 0 ? 'even' : 'odd')
}

console.log(oddOrEven([0, 1, 4, 6 ,8]))
console.log(oddOrEven([2, 3, 3, 1 ,9]))

