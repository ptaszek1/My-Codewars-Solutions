var number = function(busStops){
    function getSum(total, num) {
        return total + num;
    }
    var newArr = new Array();
    for (var i =0; i < busStops.length; i++) {
        var item = busStops[i][1] * - 1;
        var get = busStops[i][1] = item;
        var sum = busStops[i].reduce(getSum);
        newArr.push(sum)
    }
    var sum2 = newArr.reduce(getSum)
    return sum2;
}