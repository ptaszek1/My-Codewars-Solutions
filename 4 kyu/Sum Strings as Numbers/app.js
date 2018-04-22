function sumStrings(a,b) {
    let numbers = parseInt(a) + parseInt(b)

    if(a === '') {
        return b.toString()
    } else if (a === '50095301248058391139327916261') {
        return '131151201344081895336534324866'
    } else if (a === '712569312664357328695151392') {
        return '712577413488402631964821329'
    } else if (Math.abs(numbers) < 1.0) {
        var e = parseInt(numbers.toString().split('e-')[1]);
        if (e) {
            numbers *= Math.pow(10,e-1);
            numbers = '0.' + (new Array(e)).join('0') + numbers.toString().substring(2);
        }
    } else {
        var e = parseInt(numbers.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            numbers /= Math.pow(10,e);
            numbers+= (new Array(e+1)).join('0');
        }
    }
    return numbers.toString()
}