function whoseMove(lastPlayer, win) {
    if (lastPlayer === 'black') {
        if (win === false) {
            return 'white'
        } else {
            return 'black'
        }
    } else if (lastPlayer === 'white') {
        if (win === false) {
            return 'black'
        } else {
            return 'white'
        }
    }

}