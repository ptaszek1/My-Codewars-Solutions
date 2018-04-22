function fakeBin(x){
    var sum = [];
    for(var i = 0; i < x.length; i++) {
        var get2 = Number(x[i])
        if (get2 < 5) {
            sum.push(0);
        } else {
            sum.push(1);
        }
    }
    return sum.join('')
}