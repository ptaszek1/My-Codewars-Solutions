function spinWords(text){

    const get = text.split(" ")
    let arr1 = [];
    get.map((e) =>{
        if(e.length > 4) {
        const get2 = e.split('').reverse().join('');
        arr1.push(get2)
    } else {
        arr1.push(e);
    }
})
    return arr1.join(' ')
}