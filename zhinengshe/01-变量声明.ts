declare var $:Function; //声明一个全局变量
console.log( window.$ );

let oneName = 'Tom'; //类型推导为字符串
// oneName = 100; //报错


let theirAge:string|number; //联合类型
theirAge='18';
console.log( theirAge );
theirAge=19;
console.log( theirAge );

// theirAge={}; //报错



