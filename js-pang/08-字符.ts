let str01:string = 'hello world';
let str02:string = 'hello world';
let str03:String = new String('hello world');
console.log( str01 === str02 ); //true
console.log( str01 == str03 ); //true
console.log( str01 === str03 ); //false