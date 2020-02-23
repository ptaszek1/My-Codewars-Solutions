function removeDuplicateWords (s) {
    return s.split(' ').filter(function(item,i,allItems){
        return i==allItems.indexOf(item);
    }).join(' ');
  }