function roundToNext5(n) {
    let get = 0;
    if (n == 0) {
        return 0
    } else if (n % 5 === 0) {
        return n
    } else if (n > 0) {
        while (n % 5 !== 0) {
            n++
            get = n;
        }
    } else if (n < 0) {
        while (n % 5 !== 0) {
            n++
            get = n;
        }
    }
    return get
}