// ▼声明时标注变量类型
let pName:string = 'Tom';
let age:number = 18; 
let info:object = {};  //对象，数组皆可
info = [];
// info = null; //报错



let isPartyMember:boolean = false;
let other:void = undefined; //只能放undefined
// other = null; //报错
let other1:undefined = undefined; //只能放undefined
let other2:null = null;  //只能放null


console.log( '个人信息：', pName, age, isPartyMember );


// ▼如果没有标注，但有初始变量，会进行类型推导
var numberVariable = 0; 
var stringVariable = '';
// ▼非法调用方法会报错（在编译阶段报错）因为此类型的变量没有其调用的方法
// numberVariable.replace(0, 99);
// stringVariable.toFixed(3);
// (stringVariable as number).toFixed(3); //尝试用断言防止报错，没成功
// ▼非法赋值也会报错
// numberVariable='18';


// ▼枚举
enum season { spring, summer, fall, winter };
enum sex { man="男", woman="女" };
enum sex02 { '男' }; // 枚举值可以是中文
// enum sex03 { 1, 2 }; //枚举值不可为数字

let zhang01:sex;
// zhang01 = ''; //非法赋值
zhang01 = sex.man; //合法赋值

console.log( '季节枚举：', season );
console.log( '性别枚举：', sex );
console.log( 'zhang01：', zhang01 );

// ▼任意型
let msg:any;
msg = 18;
console.log(msg);
msg = '一百';
console.log(msg);


// ------------------------------
// 类型断言
let oneVal:any = 'I like programing';
let twoVal:string = (<string>oneVal).substr(0, 6);
let twoVal_:string = ( oneVal as string).substr(0, 6);
console.log( twoVal, twoVal_ );


// -------------
// ▼只读数据
let sevenDays:ReadonlyArray<number> = [1,2,3,4,5,6,7];
console.log( sevenDays[0] );
// sevenDays.push(8); //报错，不可修改