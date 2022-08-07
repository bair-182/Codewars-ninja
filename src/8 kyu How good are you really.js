function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = 0;
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i]
    }
    average = sum/classPoints.length
    return (
        yourPoints > average
    )
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
console.log(betterThanAverage([2, 3], 5))