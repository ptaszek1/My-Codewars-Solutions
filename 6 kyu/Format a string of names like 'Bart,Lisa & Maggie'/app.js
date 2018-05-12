function list(names){
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < names.length -1; i++){
        arr1.push(names[i].name)
    }
    for(let j = 0; j < names.length; j++){
        let last = names[names.length-1];
        arr2.push(last.name)
    }
    if(names.length < 1) {
        return ''
    } else if (arr1.length + arr2.length === 1) {
        return arr1.concat(arr2)[0]
    }
    return arr1.join(', ') + ' & ' + arr2[0]
}