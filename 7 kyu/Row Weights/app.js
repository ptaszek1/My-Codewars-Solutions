function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    let arr1 = [];
    for (let i =0; i < array.length; i++){
        if(i % 2 === 0){
            sum1 += array[i]
        } else {
            sum2 += array[i]
        }
    }
    arr1.push(sum1,sum2)
    return arr1;
}