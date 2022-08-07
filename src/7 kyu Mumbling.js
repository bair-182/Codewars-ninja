function accum(s) {
    // your code
    return s.split("").map((el, i) => (el.toUpperCase() + el.toLowerCase().repeat(i))).join("-")
}


console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))