function mergeArrays(arr1, arr2) {
    var get = arr1.concat(arr2)
    var uniqueArray = get.filter(function(item, pos) {
        return get.indexOf(item) == pos;
    })
    return uniqueArray.sort(function(a, b){return a-b});
}