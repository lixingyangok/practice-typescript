class Girl{
    name:string;
    age:number;
    constructor( info:object ){
        // for( let [key, val] of Object.entries( info ) ){
        //     console.log( key, ' = ', val );
        //     this[key] = val;
        // }
        this.name = info.name;
        this.age = info.age;
    }
    toIntroduce(){
        console.log( this.name, this.age );
    }
}

let girl01 = new Girl({
    name: 'Rose',
    age: 18,
});

girl01.toIntroduce();