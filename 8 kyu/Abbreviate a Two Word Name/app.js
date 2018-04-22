function abbrevName(name){
    var words = name.split(" ");
    const arr = [];
    words.forEach(function(i){
        let sum = i.toUpperCase().charAt(0)
        arr.push(sum)
    })
    return arr.join('.')
}