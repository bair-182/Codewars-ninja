function bump(str)
{
    return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}

console.log((bump("n")))
console.log((bump("__nn_nnnn__n_n___n____nn__nnn")))
console.log((bump("nnn_n__n_n___nnnnn___n__nnn__")))
