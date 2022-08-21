/*let username = "Jo";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result = username.match(userCheck);
console.log(result);*/

//Mi solucion
/*let username = "'!@#$%arjunnnij'";
let userCheck = /^[A-Za-z]+\w\w$|^[A-Za-z][A-Za-z]$/g; // Cambia esta línea
let result = userCheck.test(username);
console.log(result);*/
function titleCase(str) {
    let arr = str.split(/\s/);
    let palabra = "";
    let oracion = [];
    for(let i = 0; i < arr.length; i++) {
        palabra = arr[i][0].toUpperCase() + arr[i].slice(1);
        oracion.push(palabra);
        palabra = "";
    }
    return oracion.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

