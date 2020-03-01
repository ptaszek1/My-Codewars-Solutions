function pattern(n){
    var output="1";
    if(n < 1) {
       return '';
    } else {
       for(var i = 1; i < n + 1; i++) {
         output += String(i).repeat(i) + '\n';
       }
       return output.substring(1, output.length - 1);
    }
 }