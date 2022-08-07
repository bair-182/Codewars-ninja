function towerBuilder(nFloors) {
    // build here
    let towers = [];

    for (let i = 1; i < nFloors+1; i++) {
        towers[i-1] = towers[i-1]
        towers[i-1] = ("*").repeat(i ? i*2-1 : i)

    }
    return towers
}

// console.log(towerBuilder(1))
// console.log(towerBuilder(2))
console.log(towerBuilder(3))
console.log(towerBuilder(4))
// console.log(towerBuilder(6))
// console.log(towerBuilder(8))