function removeEveryOther(arr){
    let arr1 = []
    for (let i = 0; i < arr.length; i+=2){
        arr1.push(arr[i])
    }
    return arr1
}