function sumArray(array) {
    if (array === null) {
        return 0
    }
    array.sort(function (a, b) {
        return b - a
    })
    let get = array.splice(0, array.length - 1).slice(1);
    if (get < 1) {
        return 0
    }
    if (get.length > 1) {
        return get.reduce(function (acc, val) {
            return acc + val;
        });
    }
}