function bump(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'n') {
            sum += 1;
        }
    }
    if (sum > 15) {
        return "Car Dead"
    } else {
        return "Woohoo!"
    }
}