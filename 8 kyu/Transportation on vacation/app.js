function rentalCarCost(d) {
    let get = d * 40;
    if (d >= 7) {
        return get - 50
    } else if (d >= 3) {
        return get - 20
    } else {
        return get
    }
}