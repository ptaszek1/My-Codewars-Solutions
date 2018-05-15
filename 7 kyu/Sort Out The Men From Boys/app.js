function menFromBoys(arr) {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr1.push(arr[i])
            arr1.sort(function (a, b) {
                return a - b
            })
        } else {
            arr2.push(arr[i])
            arr2.sort(function (a, b) {
                return b - a
            })
        }
    }
    arr3 = arr1.concat(arr2)
    arr4 = arr3.filter(function (item, pos) {
        return arr3.indexOf(item) == pos;
    })
    return arr4
}