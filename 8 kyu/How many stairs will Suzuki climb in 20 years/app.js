function stairsIn20(s) {
    let get;
    let arr1 = [];
    for (let i = 0; i < s.length; i++) {
        get = s[i].reduce(function (acc, val) {
            return acc + val;
        });
        arr1.push(get)
    }
    let get2 = arr1.reduce(function (acc, val) {
        return acc + val;
    })
    return get2 * 20
}