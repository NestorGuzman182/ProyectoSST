
$(function () {
    $("#menu").load("../views/nav.html"); 
    
});

setTimeout(() => {
    document.getElementById('username').innerHTML = localStorage.usuarioNombre;
}, 1000);

function loadPausasMentales(){
    $("#container-pausasactivas").load("../views/pausasactivas/pausasmentales.html");
}
function loadAdivinanza(){
    $("#container-pausas-info").load("../views/pausasactivas/adivinanza.html");
}
function loadSopaLetras(){
    $("#container-pausas-info").load("../views/pausasactivas/sopadeletras.html");
}
function loadEncuentraPalabra(){
    $("#container-pausas-info").load("../views/pausasactivas/encuentrapalabra.html");
}
function loadEmergencias() {
    $("#container-emergencias").load("../views/tipsSST/emergencias.html"); 
    setTimeout(() => {
        loadSismo();
    }, 200);
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
function loadErgonomia(){
    $("#container-capacitaciones").load("../views/capacitaciones/ergonomia.html"); 
    setTimeout(() => {
        loadErgonomiaDef();
    }, 200);
}
function loadErgonomiaDef(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/ergonomiadef.html");
}
function loadPc(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/pc.html");
}
function loadDesk(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/desk.html");
}
function loadSilla(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/silla.html");
}
function loadTimeOptime(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/timeoptime.html");
}
function loadPostura(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/postura.html");
}
function loadSst(){
    $("#container-capacitaciones").load("../views/capacitaciones/sst.html"); 
    setTimeout(() => {
        loadQuesst();
    }, 200);
}
function loadQuesst(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/quesst.html");
}
function loadParaqsst(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/paraqsst.html");
}
function loadSgsst(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/sgsst.html");
}
function loadEstandares(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/estandares.html");
}
function loadFases(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/fases.html");
}
function loadVentajas(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/ventajas.html");
}
function loadRespemp(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/respemp.html");
}
function loadResptra(){
    $("#container-capacitaciones-info").load("../views/capacitaciones/SST/resptra.html");
}
