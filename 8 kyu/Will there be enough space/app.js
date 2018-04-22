function enough(cap, on, wait) {
    const count = cap - on - wait;
    if(count > 0) {
        return 0
    } else {
        return Math.abs(count)
    }
}