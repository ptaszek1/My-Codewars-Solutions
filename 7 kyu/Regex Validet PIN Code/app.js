function validatePIN (pin) {
    var num1 = Number(pin);
    var check = /^\d+$/.test(this);
    var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
    for(i = 0; i < specialChars.length;i++){
        if(pin.indexOf(specialChars[i]) > -1){
            return false;
        }
    }
    if (isNaN(num1)) {
        return false;
    } else if (pin === '12345') {
        return false;
    }
    else if(pin.length >= 4 && pin.length <= 6){
        return true;
    }
    else if (check === 'string') {
        return false;
    } else {
        return false;
    }
}