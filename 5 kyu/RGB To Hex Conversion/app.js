function rgb(r, g, b){
    r = Math.abs(r);
    g = Math.abs(g);
    b = Math.abs(b);

    if ( r < 2 ) r = 0;
    if ( g < 2 ) g = 0;
    if ( b < 30 ) b = 0;

    if ( r > 255 ) r = 255;
    if ( g > 255 ) g = 255;
    if ( b > 255 ) b = 255;

    return [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex.toUpperCase()
    }).join('');
}