
$(function () {
    $("#menu").load("../views/nav.html"); 
    
});

setTimeout(() => {
    document.getElementById('username').innerHTML = localStorage.usuarioNombre;
}, 1000);



function loadEmergencias() {
    $("#container-emergencias").load("../views/tipsSST/emergencias.html"); 
    loadSismo();
}
function loadSismo() {
    $("#container-emergencias-info").load("../views/tipsSST/sismo.html"); 
}
function loadIncendio() {
    $("#container-emergencias-info").load("../views/tipsSST/incendio.html"); 
}
function loadBotiquin(){
    $("#container-emergencias-info").load("../views/tipsSST/botiquin.html");
}
function loadCovid() {
    $("#container-emergencias").load("../views/tipsSST/covid.html"); 
}
function loadEstrestiempo(){
    $("#container-capacitaciones").load("../views/capacitaciones/manejoestrestiempo.html"); 
}
function loadEstres(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/estres.html"); 
}
function loadTiempo(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/tiempo.html");
}