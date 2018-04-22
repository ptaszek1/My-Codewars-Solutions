function accum(s) {
    var newArr = [];
    for(var i = 0; i < s.length; i++) {
        var sum = '';
        var get2 = s[i].charAt(0);
        sum = s[i].charAt(0) + get2.repeat(i);
        var get = sum.toLowerCase();
        var get3 = get.charAt(0).toUpperCase() + get.slice(1);
        newArr.push(get3)
        var test = newArr.join('-')
    }
    return test;
}