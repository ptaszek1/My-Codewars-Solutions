function calculateTip(amount, rating) {
    if (rating.toLowerCase() === 'terrible') {
        return 0
    } else if (rating.toLowerCase() === 'excellent') {
        return Math.ceil(amount * 0.2)
    } else if (rating.toLowerCase() === 'poor') {
        return Math.ceil(amount * 0.05)
    } else if (rating.toLowerCase() === 'good') {
        return Math.ceil(amount * 0.1)
    } else if (rating.toLowerCase() === 'great') {
        return Math.ceil(amount * 0.15)
    } else {
        return "Rating not recognised"
    }
}