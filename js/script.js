function menuPrincipal(){
    console.log("Menu principal");
}
function cargar(){    
    var valorActual = document.getElementById("valorActual");
    var chequear = localStorage.getItem("dato");

    if(chequear == null || chequear == undefined){
        valorActual.innerHTML = "0";
    }else{
        valorActual.innerHTML = chequear;
    }    
 }
function reload(){
    location.reload();
}
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            botonIzq();
            break;
        case 38:
            botonArriba();
            break;
        case 39:
            botonDer();
            break;
        case 40:
            botonAbajo();
            break;
    }
};
function dibujarNivel(){    
    document.getElementById("mapa").innerHTML = "";    
    var mapaID = document.getElementById("mapa");
      for (var i = 0; i < paredes.length; i++) {            
        var button = document.createElement("button");
        button.innerHTML = '';            
        button.setAttribute("id", "cuadradoId" + i);
        button.setAttribute("class", "cuadrado");
        button.style.outline = "none";    
        mapaID.appendChild(button);
    }
    dibujarPJ(jugador);
    dibujarCajas(box);
    dibujarBombas(bombas);
    dibujarParedes(paredes);
    if(cantidadDeFantasmas != 0){
        dibujarFantasma(fantasma);
    }
    chequearSiJugadorEstaParadoEnBomba(bombas, jugador);
    chekearCondicionesVictoria(box, bombas);
    if(cantidadDeFantasmas != 0){
    chekearCondicionesDerrota(jugador, fantasma);}
}
function dibujarPJ(jugador){
    for (var i = 0; i < jugador.length; i++) {  
        if(jugador[i] == 1){        
       
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/jugador.png')";
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
    }
}
function dibujarCajas(box){
    for (var i = 0; i < box.length; i++) {  
        if(box[i] == 2){        
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/box.jpg')";
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
    }
}
function dibujarFantasma(fantasma){
    for (var i = 0; i < fantasma.length; i++) {  
        if(fantasma[i] == 5){        
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/fantasma.png')";
            // document.getElementById("cuadradoId"+i).setAttribute("class", "animate__animated animate__fadeIn cuadrado");
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
    }
}
function dibujarBombas(bombas){
    for (var i = 0; i < bombas.length; i++) {  
        if(bombas[i] == 4){        
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/bomba.png')";
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
        if(box[i] == 2){
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/box.jpg')";
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
    }
}
function dibujarParedes(paredes){
    for (var i = 0; i < paredes.length; i++) {  
        if(paredes[i] == 3){        
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/wall.jpg')";
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
    }
}
function botonArriba(){    
    for (var i = 0; i < jugador.length; i++) {  
        if(jugador[i] == 1){
            var posicionActual = i;  
        }
    }
        if((posicionActual - 8) >= 0 && (paredes[posicionActual - 8] == 0)  && (box[posicionActual - 8] == 0)){            
            jugador[posicionActual] = 0; 
            jugador[posicionActual - 8] = 1;
        }

        if((box[posicionActual - 8] != 0) && (box[posicionActual - 16 ] != 2)&& (paredes[posicionActual - (8 * 2)] == 0)){            
            box[posicionActual - 8] = 0; 
            box[posicionActual - (8 * 2)] = 2;             
        }
    if(cantidadDeFantasmas != 0){moverFantasma(fantasma);}    
    dibujarNivel(); 
}
function botonIzq(){
    for (var i = 0; i < jugador.length; i++) {  
        if(jugador[i] == 1){
            var posicionActual = i;
        }
    }
        if((posicionActual - 1) >= 0 && (paredes[posicionActual - 1] == 0) && (box[posicionActual - 1] == 0)){            
            jugador[posicionActual] = 0; 
            jugador[posicionActual - 1] = 1;
        }

        if((box[posicionActual - 1] != 0) && (box[posicionActual - 2 ] != 2) && (paredes[posicionActual - (1 * 2)] == 0)){            
            box[posicionActual - 1] = 0; 
            box[posicionActual - (1 * 2)] = 2;             
        }
    if(cantidadDeFantasmas != 0){moverFantasma(fantasma);} 
    dibujarNivel(); 
}
function botonAbajo(){
    for (var i = 0; i < jugador.length; i++) {  
        if(jugador[i] == 1){
            var posicionActual = i;         
        }
    }
        if((posicionActual + 8) < 64 && (paredes[posicionActual + 8] == 0) && (box[posicionActual + 8] == 0)){            
            jugador[posicionActual] = 0; 
            jugador[posicionActual + 8] = 1;
        }
     
        if((box[posicionActual + 8] != 0) && (box[posicionActual + 16 ] != 2) && (paredes[posicionActual + (8 * 2)] == 0)){            
            box[posicionActual + 8] = 0; 
            box[posicionActual + (8 * 2)] = 2;             
        }
    if(cantidadDeFantasmas != 0){moverFantasma(fantasma);}     
    dibujarNivel(); 
}
function botonDer(){
    for (var i = 0; i < jugador.length; i++) {  
        if(jugador[i] == 1){
            var posicionActual = i;       
        }
    }
        if((posicionActual + 1) < 64 && (paredes[posicionActual + 1] == 0) && (box[posicionActual + 1] == 0)){            
            jugador[posicionActual] = 0; 
            jugador[posicionActual + 1] = 1;
        }

        if((box[posicionActual + 1] != 0) && (box[posicionActual + 2 ] != 2) && (paredes[posicionActual + (1 * 2)] == 0)){            
            box[posicionActual + 1] = 0; 
            box[posicionActual + (1 * 2)] = 2;             
        }
    if(cantidadDeFantasmas != 0){moverFantasma(fantasma);}    
    dibujarNivel(); 
}
function chekearCondicionesVictoria(box, bombas){
    var chequear = 0;
    for (var i = 0; i < bombas.length; i++) {  
        if(bombas[i] == 4 && box[i] == 2){
            chequear ++      
        }
    }
    if(chequear == cantidadBombas){
        console.log("Ganaste el nivel");
        document.getElementById("juego").style.display= "none";
        document.getElementById("ganar").style.display= "block";
      
        var chequear = localStorage.getItem("dato");

        if(chequear == null || chequear == undefined){
            localStorage.setItem("dato", 1);
        }else{
            var info = parseInt(localStorage.getItem("dato"));            
            localStorage.setItem("dato", info + 1); 
        }
    }
}
function chekearCondicionesDerrota(jugador, fantasma){  
  var elFantasmaEstaEn = 0;
    if(cantidadDeFantasmas != 0){
        for(var i = 0; i < fantasma.length; i++) {
            if(fantasma[i] == 5){
                elFantasmaEstaEn = i;
            }
         }

        if(jugador[elFantasmaEstaEn] == 1){
            console.log("Perdiste!");
         document.getElementById("juego").style.display= "none";
         document.getElementById("ganar").style.display= "none";
         document.getElementById("perder").style.display= "block";      
        }
    }
}
function chequearSiJugadorEstaParadoEnBomba(bombas, jugador){

    for(var i = 0; i < jugador.length; i++) {  
        if(bombas[i] == 4 && jugador[i] == 1){        
            document.getElementById("cuadradoId"+i).style.backgroundImage  = "url('/img/bombayjugador.png')";
            document.getElementById("cuadradoId"+i).style.backgroundSize= "cover";
        }
    }
}
function moverFantasma(fantasma){
    var fantasmaPuesto = 0
    var ubicacionFantasma = 0
    if(cantidadDeFantasmas !=0 ){
        for(var i = 0; i < fantasma.length; i++){  
            if(fantasma[i] == 5){
                ubicacionFantasma = i;
            }
        }
        for(var i = 0; i < fantasma.length; i++){
            if (box[ubicacionFantasma - 1] != 2 && bombas[ubicacionFantasma - 1] != 4 && paredes[ubicacionFantasma - 1] != 3 && fantasmaPuesto == 0 && (Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1  && ubicacionFantasma - 1 >= 0){
                fantasma[ubicacionFantasma - 1] = 5;
                fantasma[ubicacionFantasma] = 0;
                fantasmaPuesto = 1; 
            }
            if (box[ubicacionFantasma + 1] != 2 && bombas[ubicacionFantasma + 1] != 4 && paredes[ubicacionFantasma + 1] != 3 && fantasmaPuesto == 0 && (Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && ubicacionFantasma + 1 < 64){
                fantasma[ubicacionFantasma + 1] = 5;
                fantasma[ubicacionFantasma] = 0;
                fantasmaPuesto = 1; 
            }
            if (box[ubicacionFantasma + 8] != 2 && bombas[ubicacionFantasma + 8] != 4 && paredes[ubicacionFantasma + 8] != 3 && fantasmaPuesto == 0 && (Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && ubicacionFantasma + 8 < 64){
                fantasma[ubicacionFantasma + 8] = 5;
                fantasma[ubicacionFantasma] = 0;
                fantasmaPuesto = 1; 
            }
            if (box[ubicacionFantasma - 8] != 2 && bombas[ubicacionFantasma - 8] != 4 && paredes[ubicacionFantasma - 8] != 3 && fantasmaPuesto == 0 && (Math.floor(Math.random() * (1 - 0 + 1)) + 0) == 1 && ubicacionFantasma - 8 >= 0){
                fantasma[ubicacionFantasma - 8] = 5;
                fantasma[ubicacionFantasma] = 0;
                fantasmaPuesto = 1; 
            }
          }
    }
}


