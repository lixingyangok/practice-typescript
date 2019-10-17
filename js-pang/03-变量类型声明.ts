let pName:string = 'Tom';
let age:number = 18;
let isPartyMember:boolean = false;
console.log( '个人信息：', pName, age, isPartyMember );


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