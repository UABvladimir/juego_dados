var humanoPuntaje = 0;
var maquinaPuntaje = 0;
var turnoJugador = true;

// Función para generar un número aleatorio entre 1 y 6 (el valor de un dado)
function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para actualizar el puntaje del jugador o la máquina después de cada turno
function actualizarPuntaje(valor) {
  if (turnoJugador) {
    humanoPuntaje += valor;
  } else {
    maquinaPuntaje += valor;
  }
  
  console.log("Puntajes actuales:");
  console.log("Jugador: " + humanoPuntaje);
  console.log("Máquina: " + maquinaPuntaje);
  
  // Verificar si alguien ha ganado
  if (humanoPuntaje >= 100) {
    console.log("¡Felicidades, has ganado!");
    return;
  } else if (maquinaPuntaje >= 100) {
    console.log("Lo siento, has perdido. ¡Inténtalo de nuevo!");
    return;
  }
  
  // Si nadie ha ganado, cambiar el turno al siguiente jugador
  turnoJugador = !turnoJugador;
  console.log("Es el turno de " + (turnoJugador ? "jugador" : "máquina"));
}

// Función para que el jugador tire los dados y actualice su puntaje
function turnoJugadorTirar() {
  var dado1 = tirarDado();
  var dado2 = tirarDado();
  
  console.log("Jugador ha tirado: " + dado1 + " y " + dado2);
  actualizarPuntaje(dado1 + dado2);
}

// Función para que la máquina tire los dados y actualice su puntaje
function turnoMaquinaTirar() {
  var dado1 = tirarDado();
  var dado2 = tirarDado();
  
  console.log("Máquina ha tirado: " + dado1 + " y " + dado2);
  actualizarPuntaje(dado1 + dado2);
}



const txtNombre = document.getElementById("nombre");
const btnLanza = document.getElementById("lanzar");
const saludo = document.getElementById("saludo");
const mostrarLanzamiento = document.getElementById("lanzamiento");


btnLanza.addEventListener('click', game);

var contadorLanzamiento = 0;

function game(){
    console.log("Hola " + txtNombre.value);
    contadorLanzamiento++;
    saludo.innerHTML = "Bienvenido "+txtNombre.value;
    mostrarLanzamiento.innerHTML = "Contando "+contadorLanzamiento;
    if(contadorLanzamiento % 2 == 0){
        //alert("Es Par");
        if(turnoJugador){
            turnoJugadorTirar();
        }else{
            turnoMaquinaTirar();
        }        
    }
}

game();