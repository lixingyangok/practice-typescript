function sayHello(
    name:string,
    fn:(code:string)=>void,
):void {
    console.log( name );
    fn( `${name}__${new Date().toLocaleString()}` );
}

sayHello('tom', str=>{
    console.log( str )
});


function actor(
    info:{name:string, skill:string[]},
) {
    console.log(info.name, info.skill.join('，'));
}
// function actress( info:object ) { //报错
//     console.log(info.name, info.skill.join('，'));
// }
actor({
    name: 'Tom', 
    skill: ['sing', 'dance'],
});