function findNextSquare(sq) {
    var get =  Math.sqrt(sq) + 1;
    var sum = get * get;
    if (Number.isInteger(sum)) {
        return sum;
    } else {
        return -1;
    }
}