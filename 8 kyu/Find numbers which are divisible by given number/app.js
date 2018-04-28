function divisibleBy(numbers, divisor){
    let arr1 = []
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % divisor === 0) {
            arr1.push(numbers[i])
        }
    }
    return arr1
}