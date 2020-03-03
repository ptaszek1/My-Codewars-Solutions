class Dinglemouse{
    constructor( firstName, lastName ){
        this.firstName = firstName,
        this.lastName = lastName,
        this.getFullName();
    }
    getFullName(){
        return (this.firstName.length > 0 && this.lastName.length > 0) ? this.firstName +" "+ this.lastName : (this.lastName.length > 0) ? this.lastName : this.firstName;
    }
}