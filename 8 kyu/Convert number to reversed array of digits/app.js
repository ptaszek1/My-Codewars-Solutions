function digitize(n) {
    let arr1 = [];
    let get = n.toString().split('').reverse()
    get.map(function (x) {
        arr1.push(parseInt(x))
    })
    return arr1
}