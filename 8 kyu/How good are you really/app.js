function betterThanAverage(classPoints, yourPoints) {
    let get = classPoints.reduce(function getSum(total, num) {
        return total + num;
    }) / classPoints.length
    if (get > yourPoints) {
        return false
    } else {
        return true
    }
}