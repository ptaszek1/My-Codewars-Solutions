function findDifference(a, b) {
    var sum1 = 1;
    var sum2 = 1;
    for (var i = 0; i < a.length; i++) {
        sum1 *= a[i]
    }
    for (var j = 0; j < b.length; j++) {
        sum2 *= b[j]
    }
    var get = sum1 - sum2;
    return Math.abs(get)
}