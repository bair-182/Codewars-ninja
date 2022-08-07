function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length !== 10) return false
    let boolArr = []
    let arr = [];
    for (let i = 0; i < walk.length; i++) {
        if (i < (walk.length / 2) ) {
            arr.push(walk[i])
        } else
        if ((arr[i - (walk.length / 2)]) !== walk[i]) {
            boolArr.push(true)
        } else boolArr.push(false)
    }

    return boolArr.every(el => el)
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //true
console.log(isValidWalk(['n','s','s','s','n','s','n','n','n','s'])) //true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //false
console.log(isValidWalk(['w'])) //false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //false

