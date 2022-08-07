var min = function(list){

    return (Math.min.apply(Math, list));
}

var max = function(list){
    return (Math.max.apply(Math, list));
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(min([42, 54, 65, 87, 0]))
console.log(max([4,6,2,1,9,63,-134,566]))
console.log(max([5]), 5)