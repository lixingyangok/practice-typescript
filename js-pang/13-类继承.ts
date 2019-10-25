class Man{
    name: string;
    constructor( name:string ){
        this.name = name;
    }
    sayName(){
        console.log(`I'm ${this.name}`);
    }
}

class Singer extends Man{
    // song: string;
    constructor( name:string ){
        super( name );
    }
    toSing(){
        console.log(`I can sing： ${ 'National Anthem' }`);
    }
}

let man01 = new Man( 'Tom' );
man01.sayName();

// 
let singer01 = new Singer( 'Sara' );
singer01.sayName();
singer01.toSing();