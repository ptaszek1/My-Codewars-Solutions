function createArrayOfTiers(num) {
    var string = num + "";
    var array  = string.split('');
    var emptyArray = [];
    for(var i = 0; i < array.length; i++) {
      emptyArray.push(string.substring(0, i + 1));
    }
    return emptyArray;
  }