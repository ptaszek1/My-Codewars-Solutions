function pipeFix(numbers) {
    let get = numbers[numbers.length - 1]
    let getFirst = numbers[0]
    let arr1 = [];
    for (let i = getFirst; i <= get; i++) {
        arr1.push(i)
    }
    return arr1
}