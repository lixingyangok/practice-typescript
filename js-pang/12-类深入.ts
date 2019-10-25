class Person{
    public sex:string;
    private age:number; 
    protected readonly name:string; //只读

    constructor( name:string, age:number, sex:string  ){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    public toIntroduce(){
        console.log( this.name, this.age, this.sex );
    }
    protected sayName(){
        console.log( this.name );
    }
    private sayAge(){
        console.log( this.age );
    }
}

let p01 = new Person('Gaga', 18, 'woman')

console.log( '性别：', p01.sex ); //public 属性可随意访问
// console.log( '姓名：', p01.name ); //protected 只能在类本身、子类访问
// console.log( '年龄：', p01.age ); //private 只能在类本身访问

p01.toIntroduce(); // public 方法随意调用
// p01.sayName(); // protected 方法只能在类本身、子类调用
// p01.sayAge(); // private 方法只能在类本身调用

p01.sex += '——';
p01.toIntroduce();
// p01.name += '——'; // 只读属性不可修改