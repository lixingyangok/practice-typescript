interface Human{ //定义一个对象接口
    name:string;
    sex:string;
    age?:number; //添加“?”表示可选属性
}

let boyTom:Human = {
    name:'Tom',
    sex: '男', //如果属性缺少，会报错
    // age: 18, //如果属性缺少，不报错
};

console.log( boyTom );

interface MathFn{
    ( n01:number, n02:number ):number;
}
let getSum:MathFn = function( n01:number, n02:number ):number{
    return n01 + n02;
}
let getProduct:MathFn = function( n01:number, n02:number ):number{
    return n01 * n02;
}
console.log( getSum(3,3) );
console.log( getProduct(3,3) );