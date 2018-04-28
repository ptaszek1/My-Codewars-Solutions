function twoOldestAges(ages){
    let arr1 = []
    ages.sort((a,b) => b-a)
    arr1.push(ages[1],ages[0])
    return arr1
}