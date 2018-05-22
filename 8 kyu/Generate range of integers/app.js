function generateRange(min, max, step) {
    let arr1 = [];
    for (let i = min; i <= max; i += step) {
        arr1.push(i)
    }
    return arr1
}