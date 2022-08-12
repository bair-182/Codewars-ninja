function numbersOfLetters(integer) {
    // your code here
    const word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const result = [];
    const resArray = []

    let a = function numberToWord (num) {

        let digits = num.toString().split('');

        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < digits.length; j++) {
                if (digits[j] == i) {
                    digits[j] = word[i]
                }
            }
            resArray.push(digits
                .join('')
            )
        }
    }

    if (resArray.slice(-1) !== "four") {
        resArray.push(a(integer))
    }

    // if (result.slice(-1) !== "four") {
    //     a(integer)
    // }

    return resArray
}

console.log(numbersOfLetters(60))
// console.log(numbersOfLetters(1))
// console.log(numbersOfLetters(12))
// console.log(numbersOfLetters(37))