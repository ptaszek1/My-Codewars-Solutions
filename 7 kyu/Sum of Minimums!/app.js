function sumOfMinimums(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum += Math.min(...arr[i]);
    }
    return sum;
}