function maxNumber(n){
    console.log(n)
    let get = n.toString().split('').sort(function(a,b){
        return b - a
    })
    return Number(get.join(''))
}