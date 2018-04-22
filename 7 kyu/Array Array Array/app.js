function explode(x){
    var sum = 0;
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        if(typeof x[i] === 'number') {
            sum += x[i];
        }
    }
    for (var j =0; j< sum; j++) {
        var arr2 = [];
        arr.push(x)
    }
    if (arr.length > 0) {
        return arr;
    } else {
        return 'Void!'
    }
}