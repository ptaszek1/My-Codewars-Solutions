function arrayPlusArray(arr1, arr2) {
    sum1 = 0;
    sum2 = 0;
    arr1.map(function(i){
        sum1 += i;
    })
    arr2.map(function(x){
        sum2 += x;
    })
    return sum1 + sum2;
}