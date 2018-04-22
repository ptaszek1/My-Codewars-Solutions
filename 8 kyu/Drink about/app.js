function peopleWithAgeDrink(old) {
    if(old <= 13) return "drink toddy"
    if(old >=13 && old < 18) return "drink coke"
    if(old >=18 && old <= 20) return "drink beer"
    else return "drink whisky"
};