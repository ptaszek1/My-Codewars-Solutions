const areaOrPerimeter = function(l , w) {
    if(l == w) {
      return l * w;
    } else {
      return l + w + l + w;
    }
  };