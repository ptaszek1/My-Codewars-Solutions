function charFreq(message) {
    return message.split('').reduce(function (obj, letter) {
        obj[letter] = ++obj[letter] || 1;
        return obj;
    }, {});
}