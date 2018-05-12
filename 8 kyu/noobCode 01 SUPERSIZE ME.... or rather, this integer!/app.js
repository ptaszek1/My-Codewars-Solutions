function superSize(num){
    let get = num.toString().split('').sort(function(a,b){
        return b - a
    })
    return Number(get.join(''))
}