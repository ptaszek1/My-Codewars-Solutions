function maxProduct(numbers, size){
    numbers.sort((a,b)=>b-a)
    let get = numbers.slice(0,size)
    let sum = 1
    for (let i = 0; i < get.length; i++){sum *= get[i]}return sum
}