interface Human{ //定义一个对象接口
	name:string;
	sex:string;
	age?:number; //添加“?”表示可选属性
}

// ▼用接口约束对象
let boyTom:Human = {
	name:'Tom',
	sex: '男', //如果属性缺少，会报错
	// age: 18, //如果属性缺少，不报错
};

// ▼用接口约束方法的参数
function toLogHuman( thisOne:Human ) {
	console.log( thisOne.name, thisOne.sex );
}
toLogHuman( boyTom );
toLogHuman( {name:'Sara', sex: '女'} );



interface MathFn{
	( n01:number, n02:number ):number;
}
// ▼用接口约束一个方法的形态
let getSumFn:MathFn = function( n01:number, n02:number ):number{
	return n01 + n02;
}
let getProduct:MathFn = function( n01:number, n02:number ):number{
	return n01 * n02;
}
console.log( getSumFn(3,3) );
console.log( getProduct(3,3) );