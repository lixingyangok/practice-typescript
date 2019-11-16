
class Person{
    protected readonly name:string; //只读
    private age:number; //私有
    sex:string; //默认是public
    // static likes: string[]; //静态
    static likes = ['reading', 'singing']; //静态

    constructor( name:string, age:number, sex:string, likes:string[]  ){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    toIntroduce(){
        console.log( this.name, this.age, this.sex );
        console.log( '内部用类的名称调用 Person.likes：', Person.likes ); //静态属性不能用 this 调用
    }
    protected sayName(){
        console.log( this.name );
    }
    private sayAge(){
        console.log( this.age );
    }
}


let p01 = new Person( 'Gaga', 18, 'woman', ['reading', 'singing'] ); //['reading', 'singing']


console.log( '性别：', p01.sex ); //public 属性可随意访问
// console.log( '姓名：', p01.name ); //报错：protected 只能在类本身、子类访问
// console.log( '年龄：', p01.age ); //报错：private 只能在类本身访问
console.log( '外部调用 likes：', Person.likes ); //静态属性不能用 this 调用

p01.toIntroduce(); // public 方法随意调用
// p01.sayName(); // protected 方法只能在类本身、子类调用
// p01.sayAge(); // private 方法只能在类本身调用

p01.sex += '——';
p01.toIntroduce();
// p01.name += '——'; // 只读属性不可修改

interface pInfoObj{
    name:string, 
    age:number,
    skills?:string[],
}
class xMan{
    name: string;
    age: number;
    skills: string[];
    constructor( pInfo:pInfoObj ){
        this.name = pInfo.name;
        this.age = pInfo.age;
        this.skills = pInfo.skills || [];
    }
    becomeOlder(){
        this.age++;
        console.log('现在年龄：', this.age);
    }
}

let xMan01 = new xMan({
    name: 'wolf',
    age: 100, // 少一个参数就报错
    skills: ['recover'], 
});
let xMan02 = new xMan({
    name: 'bird',
    age: 20,
    // skills: [],  //缺少可选项不报错
});
console.log(xMan01.age);
xMan01.becomeOlder();
console.log(xMan01.age);

class Animal{
    constructor(
        public name: string,
        readonly sex: number,
        public age: number,
    ){
        console.log('my name is: ', this.name);
        // ▲以上是简写形式，可省略下方的代码
        // this.name = name;
        // this.sex = sex;
        // this.age = age;
    }
}
let dog = new Animal('dog', 1, 18);
console.log(dog);


// get, set
class SomeOne{
    // private _nameStr: string;
    constructor(
        private _nameStr: string,
    ){
        // 
    }
    // 如果只有 get，没有相应的set，那get将是只读属性
    set nameStr( newName:string ){
        if(newName.length>3){
            console.log('非法赋值');
            return;
        }
        this._nameStr = newName;
    }

    get nameStr():string{
        return this._nameStr;
    }
}
let MrLi = new SomeOne(``);
MrLi.nameStr = '山口百惠';
console.log( 'nameStr：', MrLi.nameStr );
MrLi.nameStr = '张娜拉';
console.log( 'nameStr：', MrLi.nameStr );
