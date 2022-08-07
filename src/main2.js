let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const getName = (st) => st.name
const names = students.map(st => st.name);
console.log(names)

function map(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i])
    }
    return newArray
}
console.log(map(students, st => st.name))

console.log(map(students, s => s.scores))

const getGreeting  = (s) => `Hello! My name is ${s.name}.`
console.log(map(students, getGreeting))

function filter(array, callback) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
            newArray.push(array[i])
        }

    }
}
console.log(students.filter(st => st.scores > 100))

function find (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
            return array[i]
        }
    }
}

console.log(find(students, st => st.scores >= 100 && st.isMarried))
console.log(students.find( st => st.scores >= 100 && st.isMarried))

let arr = [1, 2, 1, 4, 5];

let res=arr.map(elem => Math.sqrt(elem))

console.log(res)

