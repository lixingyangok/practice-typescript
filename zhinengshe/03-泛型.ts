
function getData<myType>( params:myType ):myType {
    // return `${params} + ${new Date().toLocaleString()}`;
    console.log( params );
    return params;
}

getData<number>(18);
getData<string>('tom');