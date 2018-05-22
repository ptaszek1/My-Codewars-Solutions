function reverseWords(str) {
    let arr1 = []
    str.split(' ').forEach(function (x) {
        arr1.push(x.split('').reverse().join(''))
    })
    return arr1.join(' ')
}