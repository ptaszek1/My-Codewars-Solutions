function getAverage(marks){
    let sum = 0
    marks.map((x)=>sum += x)
    sum = sum / marks.length
    return Math.floor(sum)
}