function longest(s1, s2) {
    let str = s1 + s2;
    let get = str.split('').filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })
    return get.sort().join('')
}