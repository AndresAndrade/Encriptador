/*let username = "Jo";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result = username.match(userCheck);
console.log(result);*/

//Mi solucion
/*let username = "'!@#$%arjunnnij'";
let userCheck = /^[A-Za-z]+\w\w$|^[A-Za-z][A-Za-z]$/g; // Cambia esta línea
let result = userCheck.test(username);
console.log(result);*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Cambia solo el código debajo de esta línea
    prop = ["Alan", "Jeff", "Sarah", "Ryan"];
    result = true;

    for(let u in prop) {
        result = userObj.hasOwnProperty(u);
        if(result == false) {
            break;
        }
    }
    return result;
    // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));

