var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) { 
        return person._friends = f;
      }
    }
    return person;
}