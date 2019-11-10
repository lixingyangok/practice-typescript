interface Human { //定义一个对象接口
	name: string;
	sex: string;
	age?: number; //添加“?”表示可选属性
}

// ▼用接口约束对象
let boyTom: Human = {
	name: 'Tom',
	sex: '男', //如果属性缺少，会报错
	// age: 18, //如果属性缺少，不报错
};

// ▼用接口约束方法的参数
function toLogHuman(thisOne: Human) {
	console.log(thisOne.name, thisOne.sex);
}
toLogHuman(boyTom);
toLogHuman({ name: 'Sara', sex: '女' });


interface MathFn {
	(n01: number, n02: number): number;
}
// ▼用接口约束一个方法的形态
let getSumFn: MathFn = function (n01: number, n02: number): number {
	return n01 + n02;
}
let getProduct: MathFn = function (n01: number, n02: number): number {
	return n01 * n02;
}
console.log(getSumFn(3, 3));
console.log(getProduct(3, 3));


// ▼约束一个类
interface classInterface{
	nowTime: Date;
	getMyTime():void;
};

class TimeClass implements classInterface{
	nowTime: Date; //★没这句就报错
	constructor(){
		this.nowTime = new Date(); //★没这句就报错
		this.getMyTime();
	}
	getMyTime(){  //★没这句就报错
		console.log('★时间★', this.nowTime.toLocaleString())
	}
}
new TimeClass();

// ▼定义一个接口（这个接口不会被编译出来
interface personX {
	readonly name: string,
	readonly sex: number,
}

let tom: personX = {
	name: 'tom',
	sex: 0,
}
console.log('调用tom的只读属性：', tom.name)
// tom.sex = 1; //不可修改，修改报错



// 字符串索引签名
interface personY {
	name: string,
	age: number,
	// ▼字符串索引签名
	[ key: string ]: any, //可选项
}
let person01:personY = {
	name: 'tom',
	age: 18, //不可缺少，否则报错
	hobby: 'running', //可有可无，
	father: 'old tom',
}