function getNumberFromString(s) {
    let get = s.replace(/[^0-9]/g, '')
    return parseInt(get, 10)
}