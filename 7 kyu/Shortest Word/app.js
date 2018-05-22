function findShort(s) {
    let get = s.split(' ')
    let arr1 = [];
    for (let i = 0; i < get.length; i++) {
        arr1.push(get[i].length)
        arr1.sort(function (a, b) {
            return a - b
        })
    }
    return arr1[0]
}