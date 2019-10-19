import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

// ▼用 function 
function getSum(n01:number, n02:number):number{
    return n01 + n02;
}
console.log( getSum(1,2), );

// ▼用赋值的方式
let getSum02 = function (n01:number, n02:number):number{
    return n01 + n02;
};
console.log( getSum02(3,4), );

let getSum03 = (n01:number, n02:number):number=>{
    return n01+n02;
}
console.log( getSum03(5,6), );