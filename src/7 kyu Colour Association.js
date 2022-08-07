function colourAssociation(array){
    // We <3 colours..
    const colObj = []
    for (let i = 0; i < array.length; i++) {
        colObj[i] = {[array[i][0]] : array[i][1]}
    }
    return colObj;

}

console.log(colourAssociation([["white", "goodness"],["black", "awesome"]]))