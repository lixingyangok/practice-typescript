class Man{
    name: string;
    constructor( name:string ){
        this.name = name;
    }
    sayName(){
        console.log(`I'm ${this.name}`);
    }
    getUpperName(){
        return this.name.toUpperCase();
    }
}

class Singer extends Man{
    songs: string[];
    constructor( name:string, songs:string[] ){
        super( name ); //把父类的信息给父级
        this.songs = songs;
    }
    toSing(){
        console.log( this.getUpperName() );
        console.log(`I can sing： ${ this.songs.length } song/s`);
    }
}

let man01 = new Man( 'Tom' );
man01.sayName();

// 
let singer01 = new Singer( 'Sara', ['song01'] );
singer01.sayName();
singer01.toSing();