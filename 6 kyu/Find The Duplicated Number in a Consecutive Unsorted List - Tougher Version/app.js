var findDup=function(arr){
    return arr.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) return el; return acc;
    }, []);
  }