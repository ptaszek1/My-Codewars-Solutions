function sumMix(x){
    sum = 0;
    x.map(function(i){
        sum += Number(i);
    })
    return sum;
}