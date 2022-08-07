const array = [30,60,10,40,20,50,70,301,2]

const sort = (array)=> {
    let result = []
    let len = array.length
    for (let j = 0; j < len; j++) {

        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        result.unshift(...array.splice(array.indexOf(max),1))
    }
    return result
}
// console.log(sort(array))

for (let j = 0; j < array.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            isSorted = false; //// ; -> IMPORTANT!!!!!!!

            // let temp = array[i]
            // array[i] = array[i + 1]
            // array[i + 1] = temp
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
    if (isSorted) {
        break
    }
}

console.log(array)