function reverser(sentence) {
    let str = sentence.split(' ').reverse().join(' ')
    return str.split('').reverse().join('')
}