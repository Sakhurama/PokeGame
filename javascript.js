
function ElegirAleatorio () {
    return Math.floor(Math.random()*3) + 1
}

function ElegirPokemon(){
    let seccionAtaques = document.getElementById('seleccionar-ataque')   
    seccionAtaques.style.display = 'block'

    let seccionElegirPokemon = document.getElementById('seleccionar-pokemon');

    let bulbasaur = document.getElementById('bulbasaur').checked
    let charmander = document.getElementById('charmander').checked

    let miPokemon = document.getElementById('pokemon-usuario');
    let enemigoPokemon = document.getElementById('pokemon-enemigo');

    const elegirAleatorio = ElegirAleatorio();

    if (pikachu.checked) {
        alert("Has elegido a Pikachu")
        miPokemon.innerHTML = 'Pikachu'
        seccionElegirPokemon.style.display = 'none'
    } else if (bulbasaur == true) {
        alert("Has elegido a Bulbasaur")
        miPokemon.innerHTML = 'Bulbasaur'
        seccionElegirPokemon.style.display = 'none'
    } else if (charmander == true){
        alert("Has elegido a Charmander")
        miPokemon.innerHTML = 'Charmander'
        seccionElegirPokemon.style.display = 'none'
    } else {
        alert("Elige un Pokemon")
        ReiniciarJuego()
    }

    if (elegirAleatorio == 1){
        alert("Tu enemigo elige a Pikachu")
        enemigoPokemon.innerHTML = 'Pikachu'
    } else if (elegirAleatorio == 2) {
        alert("Tu enemigo elige a Bulbasaur")
        enemigoPokemon.innerHTML = 'Bulbasaur'
    } else if (elegirAleatorio == 3) {
        alert("Tu enemigo elige a Charmander")
        enemigoPokemon.innerHTML = 'Charmander'
    } else {
        alert("ERROR EN ELECCIÓN ENEMIGA")
    }

    document.getElementById('btn-fuego').addEventListener('click' , AtaqueFuego)
    document.getElementById('btn-agua').addEventListener('click' , AtaqueAgua)
    document.getElementById('btn-tierra').addEventListener('click' , AtaqueTierra)

}

function AtaqueFuego(){
    ataqueJugador = "Fuego 🔥"
    AtaqueEnemigo ()
}

function AtaqueAgua(){
    ataqueJugador = "Agua 🌧️"
    AtaqueEnemigo ()
}

function AtaqueTierra(){
    ataqueJugador = "Tierra 🌱"
    AtaqueEnemigo ()
}

function AtaqueEnemigo (){
    let atacaCon = ElegirAleatorio()

    if (atacaCon == 1) {
        ataqueElegidoEnemigo = "Fuego 🔥"
    } else if (atacaCon == 2) {
        ataqueElegidoEnemigo = "Agua 🌧️"
    } else if (atacaCon == 3) {
        ataqueElegidoEnemigo = "Tierra 🌱"
    } else {
        alert("ERROR EN EL ATAQUE ENEMIGO")
    }

    Combate()
    MensajeAtaquesElegidos()
}



function MensajeAtaquesElegidos(){
    let nuevoParrafo = document.createElement("p");
    let mensaje = document.createTextNode("Has atacado con: " + ataqueJugador + "- Tu enemigo ataca con: " + ataqueElegidoEnemigo + " - " + resultado)

    nuevoParrafo.appendChild(mensaje);

    let dondePonerlo = document.getElementById("mensajes")
    dondePonerlo.appendChild(nuevoParrafo);
}

function Combate(){

    let spanVidasJugador = document.getElementById('span-vidas-jugador')
    let spanVidasEnemigo = document.getElementById('span-vidas-enemigo')

    if (ataqueJugador == ataqueElegidoEnemigo) {
        resultado = "EMPATE"
    } else if (ataqueJugador == "Fuego 🔥" && ataqueElegidoEnemigo == "Tierra 🌱") {
        resultado = "🎉 GANASTE 🎉"
        vidasEnemigo = vidasEnemigo -1
    } else if (ataqueJugador == "Agua 🌧️" && ataqueElegidoEnemigo == "Fuego 🔥"){
        resultado = "🎉 GANASTE 🎉"
        vidasEnemigo = vidasEnemigo -1
    } else if (ataqueJugador == "Tierra 🌱" && ataqueElegidoEnemigo == "Agua 🌧️"){
        resultado = "🎉 GANASTE 🎉"
        vidasEnemigo = vidasEnemigo -1
    } else {
        resultado = "💔 PERDISTE 💔"
        vidasJugador = vidasJugador -1
    }

    spanVidasJugador.innerHTML = vidasJugador
    spanVidasEnemigo.innerHTML = vidasEnemigo

    MensajeGanador()
}

function MensajeGanador(){
    let botonReiniciarJuego = document.getElementById('reset')

    let botonesAtaque =   [  
            document.getElementById('btn-fuego'), 
            document.getElementById('btn-agua'), 
            document.getElementById('btn-tierra')
        ];
    let nuevoParrafo = document.createElement("p");

    if (vidasJugador == 0){
        let mensaje = document.createTextNode("FIN DEL JUEGO - 💔 Lo sentimos, esta vez PERDISTE 💔")
        nuevoParrafo.appendChild(mensaje);
        nuevoParrafo.classList.add('mensaje', 'mensaje-perdedor');

        botonesAtaque.forEach(function(button) {
            button.disabled = true;
        });

        botonReiniciarJuego.style.display = 'block'

    } else if (vidasEnemigo == 0) {
        let mensaje = document.createTextNode("FIN DEL JUEGO - 🎉 Felicitaciones has Ganado 🎉")
        nuevoParrafo.appendChild(mensaje);
        nuevoParrafo.classList.add('mensaje', 'mensaje-ganador');

        botonesAtaque.forEach(function(button) {
            button.disabled = true;
        });

        botonReiniciarJuego.style.display = 'block'

    }

    let dondePonerlo = document.getElementById("mensajeGanador")
    dondePonerlo.appendChild(nuevoParrafo);
}

function ReiniciarJuego(){
    location.reload()
}

let seccionAtaques = document.getElementById('seleccionar-ataque')   
seccionAtaques.style.display = 'none'

let botonElegirPokemon = document.getElementById('boton-pokemon')
botonElegirPokemon.addEventListener('click', ElegirPokemon)

let botonReiniciarJuego = document.getElementById('reset')
botonReiniciarJuego.addEventListener('click', ReiniciarJuego)
botonReiniciarJuego.style.display = 'none'

let ataqueJugador = ""

let ataqueElegidoEnemigo = ""

let resultado = ""

let vidasJugador = 3;
let vidasEnemigo = 3;