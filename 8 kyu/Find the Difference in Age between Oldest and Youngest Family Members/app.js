function differenceInAges(ages){
    let arr1 = [];
    ages.sort(function(a,b){
        return b-a
    })
    arr1.push(ages[ages.length-1],ages[0],ages[0]-ages[ages.length-1])
    return arr1
}