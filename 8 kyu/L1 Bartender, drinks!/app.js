function getDrinkByProfession(param) {
    let get = param.toLowerCase()
    if (get === 'jabroni') return 'Patron Tequila';
    if (get === 'school counselor') return 'Anything with Alcohol';
    if (get === 'programmer') return 'Hipster Craft Beer';
    if (get === 'bike gang member') return 'Moonshine';
    if (get === 'politician') return 'Your tax dollars';
    if (get === 'rapper') return 'Cristal';
    else return 'Beer'
}