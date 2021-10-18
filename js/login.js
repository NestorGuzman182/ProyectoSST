
var loginBtn = document.getElementById('login-btn').addEventListener("click", login);
var message = document.getElementById('message');
var inputUser = "";

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
    inputUser = document.getElementById('user').value;
    var inputPassword = document.getElementById('password').value;
    var respuesta = users.find(x => x.cc == inputUser);

    if(respuesta == undefined){
        alert("Usuario o contraseña no válida");
    } else{
        localStorage.setItem('usuarioNombre', respuesta.name);
        if(inputUser == respuesta.cc && inputPassword.toString() == '1234'){
            window.open("views/home.html", "__self") ;
        } else{
            alert("usuario o contraseña no válida")
        }
    }
    
}


document.getElementById('username').innerHTML = localStorage.usuarioNombre;