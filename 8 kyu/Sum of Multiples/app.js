function sumMul(n,m){
    let sum = 0;
    for (var i = 0; i < m; i+=n) {
        sum += i;
    }
    if(sum <= 0) {
        return 'INVALID';
    }else {
        return sum;
    }
}