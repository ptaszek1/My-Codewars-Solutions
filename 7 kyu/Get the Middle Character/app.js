function getMiddle(s) {
    let get = s.length/2;
    let get1 = s.charAt(get)
    let get2 = s.charAt(get-1) + s.charAt(get)
    if(s.length % 2 === 0){
        return get2
    } else {
        return get1
    }
}