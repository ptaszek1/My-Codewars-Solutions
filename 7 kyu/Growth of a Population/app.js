function nbYear(p0, percent, aug, p) {
    var i = 0;
    var score = p0;
    
    while(score < p) {
      score = score + score * (percent * 100 / 10000) + aug;
      i++
    }
    return i;
}