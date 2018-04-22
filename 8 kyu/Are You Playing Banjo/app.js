function areYouPlayingBanjo(name) {
    if(name.charAt(0) === 'R') return name + ' plays banjo';
    if(name.charAt(0) === 'r') return name + ' plays banjo';
    else return name + ' does not play banjo';
}