// 抽象类（用于约束子类
abstract class Dancer{
	constructor(
		public name:string,
		public age:number,
	){
		// 
	}
	// ▼继承这个类的子类，必须具体这个方法
	abstract dance():void;
}


class NationalDancer extends Dancer{
	constructor( name:string, age:number ){
		// 必须提交父类要求的2个参数，不可省略、遗漏
		super( name, age );
	}
	// ▼你类声明必须有这个方法，没有就报错
	dance(){
		console.log('我跳：民族舞');
	}
	sing(){
		console.log('我唱：红歌');
	}
}

// let dancer01 = new Dancer( 'Mr Zhang', 18 ); //不可创建抽象类实例
let dancer01:NationalDancer = new NationalDancer( 'Mr Zhang', 18 );
let dancer02:Dancer = new NationalDancer( 'Mr Wang', 18 );

dancer01.dance();
dancer01.sing();

// dancer02.sing(); // 标注类型为 Dancer 是不能调用 NationalDancer 的专属方法的, 报错

