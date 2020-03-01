sortme = function( names ){
    return names.sort(function(a,b) { return (a.toLowerCase() < b.toLowerCase()) ? -1 : 1;});
}  