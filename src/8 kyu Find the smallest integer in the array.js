class SmallestIntegerFinder {
    static findSmallestInt(args) {
        return Math.min.apply(Math, args)
    }
}

console.log(SmallestIntegerFinder.findSmallestInt([78,56,232,12,8])) //8
console.log(SmallestIntegerFinder.findSmallestInt([78,56,232,12,18])) //12
console.log(SmallestIntegerFinder.findSmallestInt([78,56,232,412,228])) //56
console.log(SmallestIntegerFinder.findSmallestInt([78,56,232,12,0])) //0
console.log(SmallestIntegerFinder.findSmallestInt([1,56,232,12,8])) //1

