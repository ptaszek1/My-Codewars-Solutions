function countSheeps(arrayOfSheep) {
    sum = 0;
    arrayOfSheep.forEach(function(x){
        if(x === true) {
            return sum++;
        }
    })
    return sum
}