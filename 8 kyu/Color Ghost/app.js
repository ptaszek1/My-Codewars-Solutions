class Ghost {
    constructor(color) {
      this.colors = ['white','yellow','purple','red'];
    }
    get color() {
      var randomColor = this.colors[Math.floor(Math.random() * this.colors.length)]
      return randomColor; 
    }
    
}
  
module.exports = Ghost;