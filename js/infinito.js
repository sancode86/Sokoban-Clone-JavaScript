// Jugador en la matriz es el numero 1
// Cajas en la matriz son el numero 2
// Paredes en la matriz son el numero 3
// Bombas en la matriz son el numero 4
// Fantasma en la matriz es 5

var cantidadBombas = 1;
var jugadorPuesto = 0;
var cantidadCajas = 0;
var cantidadDeFantasmas = 1;
var cantidadDeFantasmasMax = 1;
var paredes = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ];
  
  var box = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ];

  var bombas = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ];

  var jugador = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ];

  var fantasma = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ];

generarCajas();
generarBombas();
generarFantasma();
generarParedes();
generarJugador();

function generarCajas(){
  for(var i = 0; i < box.length; i++){ 
    if ((Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1){
    var modificador = i%2;
    }else{
    var modificador = i%3;
    }
    if ((Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && cantidadCajas < 30 && modificador == 0 ){
      box[i] = 2;
      cantidadCajas = cantidadCajas + 1;
    }
  }  
}
function generarBombas(){
  for(var i = 0; i < bombas.length; i++){  
    if ((Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && box[i] != 2 && paredes[i] != 3 && cantidadBombas < 6 && (i% 2 == 0) && bombas[i + 1] != 4 && bombas[i - 1] != 4 && bombas[i + 8] != 4 && bombas[i - 8] != 4 && i > 20){
      bombas[i] = 4;
      cantidadBombas = cantidadBombas + 1;
    }    
  }
  cantidadBombas = cantidadBombas - 1; //Ajuste harcodeado porque la variable fue inicializada en 1
}
function generarJugador(){
  //Fijate si podes poner el jugador en algun lugar que no este encerrado
  for(var i = 0; i < jugador.length; i++){  
    if (jugadorPuesto == 0 && box[i] != 2 && bombas[i] != 4 && box[i + 1] != 2 && box[i - 1] != 2 && box[i + 8] != 2 && paredes[i - 8] != 3 && paredes[i] != 3  && paredes[i + 8] != 3  && fantasma[i] != 5){
      jugador[i] = 1;
      jugadorPuesto = 1;
    }
  }
  //No pudiste ponerlo en un lugar bueno? ya fue ponelo igual:
  if (jugadorPuesto == 0){ 
    for(var i = 0; i < jugador.length; i++){  
      if (box[i] != 2 && bombas[i] != 4 && paredes[i] != 3 && jugadorPuesto == 0 && fantasma[i] != 5){
        jugador[i] = 1;
        jugadorPuesto = 1; 
      }
    }
  }
}
function generarFantasma(){
  //Fijate si podes poner al fantasma en algun lugar
  for(var i = 0; i < fantasma.length; i++){  
    if (box[i] != 2 && bombas[i] != 4 && paredes[i] != 3 && jugador[i] != 1 && cantidadDeFantasmas == cantidadDeFantasmasMax && i>30 && (Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && box[i - 1] != 2 && box[i + 8] != 2 && box[i - 8] != 2){
      fantasma[i] = 5;      
      cantidadDeFantasmas = cantidadDeFantasmas + 1;
    }
  }
  }
  function generarParedes(){
  //Rellenar un poco con paredes
  for(var i = 0; i < paredes.length; i++){  
    if ((Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && jugador[i]!= 1 && paredes[i]!= 3 && box[i] != 2 && bombas[i] != 4  && bombas[i + 1] != 4 && bombas[i - 1] != 4 && bombas[i + 8] != 4 && bombas[i - 8] != 4 && bombas[i + 2] != 4 && bombas[i - 2] != 4 && bombas[i + 16] != 4 && bombas[i - 16] != 4 && fantasma[i] != 5){
      
      if((Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1){
        paredes[i] = 3;   
      }   
    }
  }  
}