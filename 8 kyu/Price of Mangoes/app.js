function mango(quantity, price) {
    let value = quantity;
    let counter = 0;
    while (quantity >= 3) {
        quantity -= 3;
        counter++;
    }
    return (value - counter) * price;
}