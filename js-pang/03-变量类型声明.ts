// ▼声明时标注变量类型
let pName:string = 'Tom';
let age:number = 18;
let isPartyMember:boolean = false;
let other:void = undefined; //只能放undefined
let other1:undefined = undefined; //只能放undefined
let other2:null = null;  //只能放null


console.log( '个人信息：', pName, age, isPartyMember );


// ▼如果没有标注，但有初始变量，会进行类型推导
var numberVariable = 0; 
var stringVariable = '';
// ▼非法调用方法会报错（在编译阶段报错）因为此类型的变量没有其调用的方法
// numberVariable.replace(0, 99); 
// stringVariable.toFixed(3); 
// ▼非法赋值也会报错
// numberVariable='18';


// ▼枚举
enum season { spring, summer, fall, winter };
console.log( '季节枚举：', season );
enum sex { man="男", woman="女" };
console.log( '性别枚举：', sex );

// ▼任意型
let msg:any;
msg = 18;
console.log(msg);
msg = '一百';
console.log(msg);