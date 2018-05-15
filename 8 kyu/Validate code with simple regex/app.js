function validateCode(code) {
    if (code.toString().indexOf(1) && code.toString().indexOf(2) && code.toString().indexOf(3)) {
        return false
    } else {
        return true
    }
}