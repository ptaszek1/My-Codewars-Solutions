function findMultiples(integer, limit) {
    let arr1 = [];
    for (let i = integer; i <= limit; i += integer) {
        arr1.push(i)
    }
    return arr1
}