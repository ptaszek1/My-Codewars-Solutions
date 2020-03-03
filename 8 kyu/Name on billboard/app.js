function billboard(name, price = 30){
    var score = 0;
    for(var i = 0; i < name.length; i++) {
      score += price;
    }
    return score;
  } 