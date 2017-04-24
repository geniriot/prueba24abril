var discos = [
  "Aeródromos",
  "Helipuertos",
  "Aeropuertos",
  "Propiedad fiscal",
  "Red pequeños aeródromos",
  "Red aeródromos militares",
  "The fall",
  "Humanz"

]

var canciones = [344,122,7,100,303,12]



function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('here');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(25);
  for(var x = 0; x <= discos.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(255,100);
    // el tamaño del texto es igual a la cantidad de canciones ganados * 3
    textSize((canciones[x]*0));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(canciones[x], ((width/(discos.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(discos[x], ((width/(discos.length+1))*(x+1)), ((height/2)+12),((windowWidth/(discos.length+1))-50),100);
  }
}
