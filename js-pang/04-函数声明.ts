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

console.log( getNames('张三', '李四') );