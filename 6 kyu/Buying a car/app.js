function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    var oldCar = startPriceOld;
    var newCar = startPriceNew;
    var score = 0;
    var index = 0;
    var percent = (percentLossByMonth * 100) / 10000;
    
    if(startPriceOld > startPriceNew){
      return [0,startPriceOld - startPriceNew];
    } else if(startPriceOld == startPriceNew) {
        return [0,0];
    } else {
      while(score < newCar) {
        index++;
        if(index % 2 == 0) {
          percent += 0.005;
        } 
        oldCar = oldCar - (oldCar * percent);
        newCar = newCar - (newCar * percent);
        score = oldCar + (savingperMonth * index);
      }
      return [index,parseInt((score - newCar).toFixed(0))];
    }
  }