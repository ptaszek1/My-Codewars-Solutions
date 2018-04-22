function century(year) {

    var newYear = year.toString().length;
    var stYear;

    if (newYear >= 3){
        stYear = year.toString().substring(0, newYear - 2);

        if (year % 100 !== 0){
            return (parseInt(stYear)+1);
        } else {
            return parseInt(stYear);
        }
    } else if (newYear < 3){
        return 1;
    }
}