function strCount(str, letter){  
    var sum = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i] == letter) {
        sum++;
      }
    }
    return sum
  }