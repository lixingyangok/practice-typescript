// ▼参数要标注类型，也可定义默认值，
function howOld( age:number=0, stature?:string, ):string {
    let result = `今年${age}岁`;
    if(stature) result+=`，而且身材${stature}`;
    return result;
}

console.log( howOld() );
console.log( howOld(18) );
console.log( howOld(22, '丰满' ) );

function getNames( ...names:string[] ):string{
    let result:string = '得到参数：';
    names.forEach(cur=>result+=`${cur}、`);
    result = result.replace(/、$/, '');
    return result;
}

console.log( 
    getNames('张三', '李四')//这里参数只能传入字符串，否则报错
); 


function showErrow( msg:string ):never {
    throw new Error('抛出错误：' + msg ); //比return力度大
    console.log('抛出错误02'); //执行不到
}
// showErrow('请注意');

function giveMeObj( params:object ):void{
    console.log( Object.keys(params) || '无' );
}
giveMeObj({ a:1, b:2 }); 
giveMeObj( [1,2,3] );


// ▼参数断言
interface pInfo{
    name: string,
    age: number,
}
function showSomeone( pInfo:pInfo ) {
    console.log(`${pInfo.name}来了，他今年${pInfo.age}岁`);
}
showSomeone({name:'tom', age:18}); //正常传参，不报错
// showSomeone( {name:'tom'} ); //传参错误，报错
showSomeone( {name:'tom'}  as pInfo ); //添加断言，不报错（忽悠当前参数符合 pInfo 这个接口

