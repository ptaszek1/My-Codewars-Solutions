function pattern(n){
    var output="";
    var arr = [];
    if(n < 1) {
       return '';
    } else {
       for(var i = n; i > 0; i--) {
         output += i;
         arr.push(output);
       }
       return arr.reverse().join('\n');
    }
 }