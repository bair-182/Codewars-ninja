function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna
        .split("")
        .map(el => (el === "T" ? "U" : el))
        .toString()
        .replace(/,/gi,"")
}

console.log(DNAtoRNA("TTTT"))
console.log(DNAtoRNA("GCAT"))
console.log(DNAtoRNA("GACCGCCGCC"))