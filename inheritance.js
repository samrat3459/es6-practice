class Main{
    constructor(){
        this.Main = 'Ahmed'
    }
}

class Info extends Main{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.Main;
    }
}

const details = new Info('Samrat');
// console.log(details.getFullName());