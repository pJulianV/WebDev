var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "title.png";

var imagen = new Image();

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * maxi - min + 1)
    return resultado
}