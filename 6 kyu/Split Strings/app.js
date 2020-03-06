function solution(str){
    var arr = str.match(new RegExp('.{1,' + 2 + '}', 'g'));

    (str != null && str.length < 1) ? arr = [] : (arr[arr.length -1].length == 1) ? arr[arr.length -1] = arr[arr.length -1]+'_': arr[arr.length -1] = arr[arr.length -1];
    return arr;
}