function getNames(data){
    var r = data.map(function(item){
      return item.name;
    });
    return r;
}