declare var $:Function; //声明一个全局变量
console.log( window.$ );

let oneName = 'Tom'; //类型推导为字符串
// oneName = 100; //赋值不复合最初定义的类型，报错


let theirAge:string|number; //联合类型
theirAge='18';
console.log( theirAge );
theirAge=19;
console.log( theirAge );

// theirAge={}; //赋值超出最初定义的类型，报错



let position:{x:number, y:number, z?:number}; //对象类型（复合类型
position = { x:1, y: 2 }; //合法赋值
position = { x:1, y:2, z:3 }; //合法赋值
// position = { x:1 }; //非法赋值，报错