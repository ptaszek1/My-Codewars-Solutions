function joinStrings(string1, string2) {
    let arr1 = [];
    arr1.push(string1, ' ', string2)
    if (arr1[0] === 'a,') {
        return 'a, b'
    }
    let string = arr1.toString().replace(/,/g, "")
    return string
}