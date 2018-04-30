function nextBigger(n){
    var numbersSort = (n) => n.toString().split('').sort((a, b) => b - a).join('');
    if (n.toString() === numbersSort(n)) return -1;
    for (i = n + 1; i <= parseInt(numbersSort(n)); i++) {
        if (numbersSort(i) === numbersSort(n)) return i;
    }
}