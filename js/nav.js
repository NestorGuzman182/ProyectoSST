
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
    setTimeout(() => {
        loadEstres();
    }, 200);
}
function loadEstres(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/estres.html"); 
}
function loadTiempo(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/tiempo.html");
}
function loadPeligros(){
    $("#container-capacitaciones").load("../views/capacitaciones/peligros.html"); 
    setTimeout(() => {
        loadPeligrosriesgos();
    }, 200);
}
function loadPeligrosriesgos(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/peligroyriesgo.html");
}
function loadIdentificacion(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/identificacion.html");
}
function loadTiposPeligro(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/tipospeligro.html");
}
function loadControlPeligro(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/controlpeligro.html");
}
function loadNivelCon(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/nivelcon.html");
}
function loadPrevencion(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/prevencion.html");
}
function load5s(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/5s.html");
}
function loadRiesgos(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/riesgos.html");
}
function loadIncendios(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/incendios.html");
}