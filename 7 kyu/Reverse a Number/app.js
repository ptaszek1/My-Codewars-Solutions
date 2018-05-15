function reverseNumber(n) {
    let get = n + ""
    if (n < 0) {
        return Number('-' + get.replace('-', '').split('').reverse().join(''));
    }
    return Number(get.split('').reverse().join(''))
}