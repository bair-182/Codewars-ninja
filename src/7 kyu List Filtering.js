function filter_list(l) {
    // Return a new array with the strings filtered out

    return l.filter(x => typeof x === 'number' );

}


console.log( filter_list([1,2,'a','b']) )
console.log( filter_list([1,'a','b',0,15]) )
console.log( filter_list([1,2,'aasf','1','123',123]) )