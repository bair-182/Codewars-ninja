function removeSmallest(numbers) {
    let res = [];
    if (numbers.length === 0) return []
    let min = numbers.indexOf(Math.min.apply(Math, numbers))
    for (let i = 0; i < numbers.length; i++) {
        if (i !== min) {res.push(numbers[i])}
    }
    return res
}


console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 0, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([]))