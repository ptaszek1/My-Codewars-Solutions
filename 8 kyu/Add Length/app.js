function addLength(str) {
    let arr = [];
    str.split(' ').forEach(function (x) {
        arr.push(x + ' ' + x.length)
    })
    return arr
}