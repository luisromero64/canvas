var d = document.getElementById("soloadc");
var lienzo = d.getContext("2d");
var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick );
var ancho = d.width;





function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}

function dibujoPorClick()
{
    var xxx = parseInt(texto.value);
    var colorcito = "red";

var lineas = xxx;
var espacio = ancho / lineas;
var l = 0;
var xi, yi, xf, yf;



for(l = 0; l<lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    console.log("linea" + 1);
}

colorcito = "blue";
for(l = 0; l<lineas; l++)
{
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarlinea(colorcito, xi, 0, 300, yf);
    console.log("linea" + 1);
}

}
