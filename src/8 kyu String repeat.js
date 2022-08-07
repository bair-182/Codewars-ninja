function repeatStr (n, s) {
    let res = ''
    for (let i = 0; i < n; i++) {
        res = res + `${s}`
    }
    return res
}



console.log(repeatStr(6, 'i'))
console.log(repeatStr(3, 'Hello'))
