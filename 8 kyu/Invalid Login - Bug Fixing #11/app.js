function validate(username, password){
    var database = new Database();
    return (username.includes('||') || password.includes('//') || username.includes('//') || password.includes('||')) ? "Wrong username or password!" : database.login(username, password);
  }