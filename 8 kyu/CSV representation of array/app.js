function toCsvText(array) {
    let arr1 = []
    for (let i =0; i < array.length; i++){
        arr1.push(array[i]+'\n')
    }
    return arr1.join('').slice(0, -1)
}