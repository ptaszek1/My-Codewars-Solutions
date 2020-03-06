function solution(input, markers) {
    let arr = input.split('\n');
    let marker;
    for (let i in arr) {
      if (arr[i].indexOf(markers[0]) !== -1) {
        marker = arr[i].indexOf(markers[0])
      }
      else if (arr[i].indexOf(markers[1]) !== -1) {
        marker = arr[i].indexOf(markers[1])
      }
      else {
        continue;
      }
      arr[i] = arr[i].slice(0, marker - 1);
    }
    return arr.join('\n');
};