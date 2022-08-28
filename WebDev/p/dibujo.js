var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yi, xf, yf;
var xInvertido, yInvertido;

while(l < lineas)
{   
    yi = 10 * l;
    xf = 10 * (l + 1);

    dibujarLineas("#AFF", 0, yi, xf, 300);
    dibujarLineas("#AFF", 300, yi, xf, 0);
    dibujarLineas2("#AFF", 0, yi, xf, 300);
    dibujarLineas2("#AFF", 300, yi, xf, 0);
    console.log("Linea" + 1);
    l++;
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarLineas2(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(yinicial, xinicial);
    lienzo.lineTo(yfinal, xfinal);
    lienzo.stroke();
    lienzo.closePath();
}