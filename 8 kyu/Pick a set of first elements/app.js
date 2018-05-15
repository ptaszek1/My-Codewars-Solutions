function first(arr, n) {
    let arr1 = []
    if (n === undefined) {
        arr1.push(arr[0])
        return arr1
    }
    return arr.slice(0, n)
}