function maxTriSum(numbers){
    var a = [...new Set(numbers)].sort((a, b) => b - a);
    return a[0] + a[1] + a[2];
  }