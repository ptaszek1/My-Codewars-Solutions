function isPangram(string){
    var a = [], 
        i = 'a'.charCodeAt(0), 
        j = 'z'.charCodeAt(0),
        status = false;
        
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a.every(function(item){
      return (string.toLowerCase().includes(item));
    })
}