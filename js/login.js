
var loginBtn = document.getElementById('login-btn').addEventListener("click", login);
var message = document.getElementById('message');

/* localStorage.setItem('usuario', inputUser);
localStorage.setItem('contraseña', inputPassword); */

let users = [
    {
        "name": "Laura Milena Rangel",
        "cc": "1032477944"
    },
    {
        "name": "Karen Tatiana Verano",
        "cc": "10164957268"
    },
    {
        "name": "Andrés Felipe Martinez",
        "cc": "1000577234"
    },
    {
        "name": "Alberto García",
        "cc": "72983274"
    }
]

function login(){
    var inputUser = document.getElementById('user').value;
    var inputPassword = document.getElementById('password').value;
    var respuesta = users.find(x => x.cc == inputUser);
    

    if(respuesta == undefined){
        alert("Usuario o contraseña no válida");
    } else{
        if(inputUser == respuesta.cc && inputPassword.toString() == '1234'){
            alert("Login Exitoso")
        } else{
            alert("usuario o contraseña no válida")
        }
    }
    
}


