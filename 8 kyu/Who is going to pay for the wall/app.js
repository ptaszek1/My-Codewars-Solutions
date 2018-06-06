function whoIsPaying(name) {
    let arr = []
    if (name.length <= 2) arr.push(name)
    if (name.length >= 3) arr.push(name, name.substring(0, 2))
    return arr
}