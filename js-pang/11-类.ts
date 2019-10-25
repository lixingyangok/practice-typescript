
class Girl{
    name:string; //定义数据类型
    age:number;
    constructor( name:string, age:number ){
        this.name = name;
        this.age = age;
    }
    toIntroduce(){
        console.log( this.name, this.age );
    }
}

let girl01 = new Girl( 'Sara', 18 );

girl01.toIntroduce();