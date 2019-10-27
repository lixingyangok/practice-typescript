function sayHello(
    name:string,
    fn:(code:string)=>void,
):void {
    console.log( name );
    fn( `${name}__${new Date().toLocaleString()}` );
}

sayHello('tom', str=>{
    console.log( str )
})