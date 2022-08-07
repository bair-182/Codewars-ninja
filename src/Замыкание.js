function logPerson() {
    return console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

const person1 = {name: "Michael", age: 23, job: "Frontend"}
const person2 = {name: "Alex", age: 22, job: "SMM"}

bind(person1, logPerson)()
bind(person2, logPerson)()


