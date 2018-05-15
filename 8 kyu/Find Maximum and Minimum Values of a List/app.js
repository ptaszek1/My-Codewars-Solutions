var min = function (list) {
    list.sort(function (a, b) {
        return a - b
    })
    return list[0];
}

var max = function (list) {
    list.sort(function (a, b) {
        return b - a
    })
    return list[0];
}