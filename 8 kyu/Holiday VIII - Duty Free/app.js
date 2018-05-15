function dutyFree(normPrice, discount, hol) {
    let get = Number('0.' + discount);
    if (discount < 10) {
        get = Number('0.0' + discount);
    }
    return Math.floor(hol / (normPrice * get))
}