function array(arr){
    return arr.split(',').length > 2 ? arr.split(',').slice(1, -1).join(' ') : null;
}  