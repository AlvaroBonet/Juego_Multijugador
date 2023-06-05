/**
  * addEventListener('evento', funcion);
  * 
  * El metodo addEventListener relaciona la aparicion de un evento con la ejecucion de una funcion.
  * 
  * Este metodo se aplica sobre un elemento de HTML.
  * 
  * Sustituye al element.setAttribute('evento', 'funcion')
  * 
  * EVENTO LOAD
  * Evento que hace referencia a cuando la pagina web carga completamente.
  * NO AFECTA SOBRE OTROS ELEMENTOS QUE NO SEAN BODY
  * 
  */
 // Identifico la etiqueta main.
// Coloco el flexbox
let section = document.getElementsByTagName('section')[1];
section.classList.add('container');

// Coloco el numero de filas y columnas
let numF = 15;
let numC = 15;

let div, objetivo, j1, j2;

let letrasF, letrasC
let arrowF, arrowC
let metaF, metaC
let puntuacion1=0;
let puntuacion2=0;

// Creamos el inicio del tablero
document.addEventListener('load', inicio());

/**
 * Funcion que inicia el tablero (CON TODO LO NECESARIO)
 */
function inicio(){
    // Bucles para crear filas y columas
    for (let i = 0; i < numF; i++){
        for(let j = 0;  j < numC; j++){
            div = document.createElement('div'); 
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);

            section.appendChild(div);
        }
    }
    colocarFichas();
}

/**
 * Function que coloca las casillas inicialmente (ALEATORIO TODO)
 */
function colocarFichas(){
    let numero1;
    let numero2;

    metaF= Math.floor(Math.random()*15); //Coloca de manera aleatoria las meta
    metaC= Math.floor(Math.random()*15);

    objetivo = document.getElementById(`f${metaF}c${metaC}`);
    objetivo.classList.add('objetivo');

    letrasF= Math.floor(Math.random()*15); //Coloca aleatorio el jugador 1(taclas)
    letrasC= Math.floor(Math.random()*15);

    j1 = document.getElementById(`f${letrasF}c${letrasC}`);
    j1.classList.add('j1');

    arrowF= Math.floor(Math.random()*15); // coloca al jugador 2 (arrow)
    arrowC= Math.floor(Math.random()*15);

    j2 = document.getElementById(`f${arrowF}c${arrowC}`);
    j2.classList.add('j2');
}

// Creamos el evento de escucha de teclado
document.addEventListener('keydown', mover);

/**
 * Funcion que detecta el movimiento y ejecuta el cambio de posicion
 * -    j1: mueve con flechas
 * -    j2: mueve con wasd
 * 
 * @param {Object} event - Informacion sobre el evento que se ha ejecutado  
 */
function mover(event){
    console.log(event);
    switch(event['key']){
        case 'ArrowUp':
            document.getElementById(`f${arrowF}c${arrowC}`).classList.remove('j2');
            if(arrowF==0){
                arrowF=14;
            }else{
                arrowF=arrowF-1;
            }
            if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                if(arrowF==14){
                    arrowF=0;
                }else{
                    arrowF=arrowF+1;
                } 
            }
            document.getElementById(`f${arrowF}c${arrowC}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowDown':
            document.getElementById(`f${arrowF}c${arrowC}`).classList.remove('j2');
            if(arrowF==14){
                arrowF=0;
            }else{
                arrowF=arrowF+1;
            }
            if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                if(arrowF==0){
                    arrowF=14;
                }else{
                    arrowF=arrowF-1;
                }
            }
            document.getElementById(`f${arrowF}c${arrowC}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowLeft':
            document.getElementById(`f${arrowF}c${arrowC}`).classList.remove('j2');
            if(arrowC==0){
                arrowC=14;
            }else{
                arrowC=arrowC-1;
            }
            if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                if(arrowC==14){
                    arrowC=0;
                }else{
                    arrowC=arrowC+1;
                } 
            }
            document.getElementById(`f${arrowF}c${arrowC}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowRight':
            document.getElementById(`f${arrowF}c${arrowC}`).classList.remove('j2');
            if(arrowC==14){
                arrowC=0;
            }else{
                arrowC=arrowC+1;
            }
            if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                if(arrowC==0){
                    arrowC=14;
                }else{
                    arrowC=arrowC-1;
                }
            }
            document.getElementById(`f${arrowF}c${arrowC}`).classList.add('j2');
            ganar();
            break;      
        }
        switch(event['key']){
            case 'w':
                document.getElementById(`f${letrasF}c${letrasC}`).classList.remove('j1');
                if(letrasF==0){
                    letrasF=14;
                }else{
                    letrasF=letrasF-1;
                }
                if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                    if(letrasF==14){
                        letrasF=0;
                    }else{
                        letrasF=letrasF+1;
                    }
                }
                document.getElementById(`f${letrasF}c${letrasC}`).classList.add('j1');
                ganar();
                break;
            case 's':
                document.getElementById(`f${letrasF}c${letrasC}`).classList.remove('j1');
                if(letrasF==14){
                    letrasF=0;
                }else{
                    letrasF=letrasF+1;
                }
                if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                    if(letrasF==0){
                        letrasF=14;
                    }else{
                        letrasF=letrasF-1;
                    } 
                }
                document.getElementById(`f${letrasF}c${letrasC}`).classList.add('j1');
                ganar();
                break;
            case 'a':
                document.getElementById(`f${letrasF}c${letrasC}`).classList.remove('j1');
                if(letrasC==0){
                    letrasC=14;
                }else{
                    letrasC=letrasC-1;
                }
                if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                    if(letrasC==14){
                        letrasC=0;
                    }else{
                        letrasC=letrasC+1;
                    }
                }
                document.getElementById(`f${letrasF}c${letrasC}`).classList.add('j1');
                ganar();
                break;
            case 'd':
                document.getElementById(`f${letrasF}c${letrasC}`).classList.remove('j1');
                if(letrasC==14){
                    letrasC=0;
                }else{
                    letrasC=letrasC+1;
                }
                if(`f${letrasF}c${letrasC}`==`f${arrowF}c${arrowC}`){
                    if(letrasC==0){
                        letrasC=14;
                    }else{
                        letrasC=letrasC-1;
                    }
                }
                document.getElementById(`f${letrasF}c${letrasC}`).classList.add('j1');
                ganar();
                break;
            }
}
function ganar(){
    if(`f${letrasF}c${letrasC}`==`f${metaF}c${metaC}`){ //Iguala la posicion y si coincide saca el ganador
        alert("Jugador 1 es el ganador");
        document.removeEventListener('keydown',mover);
        puntuacion1++;
    }
    if(`f${arrowF}c${arrowC}`==`f${metaF}c${metaC}`){
        alert("Jugador 2 es el ganador");
        document.removeEventListener('keydown',mover);
        puntuacion2++;
    }
}
document.getElementById('jugador1').textContent=`Jugador 1: ${puntuacion1}`;
document.getElementById('jugador2').textContent=`Jugador 2: ${puntuacion2}`;
function reinicio(){
    document.addEventListener('keydown',mover);
    document.getElementById(`f${letrasF}c${letrasC}`).classList.remove('j1');
    document.getElementById(`f${arrowF}c${arrowC}`).classList.remove('j2');
    document.getElementById(`f${metaF}c${metaC}`).classList.remove('objetivo');
    colocarFichas();
    document.getElementById('jugador1').textContent=`Jugador 1: ${puntuacion1}`;
    document.getElementById('jugador2').textContent=`Jugador 2: ${puntuacion2}`;
}

/**
 * PENDIENTE:
 * 1. Mover casillas.--
 * 2. Que hago con los limites.--
 * 3. (colision entre dos jugadores. QUE HAGO).--
 * 4. Que hago cuando gano.--
 * 5. OBGLITAGORIO. Boton reinicio para ejecutar de nuevo la funcion inicio.--
 * 6. Contadores para puntuacion??--
 * 7. Eliminar evento de teclado cuando hay un ganador.--
 * 8. CSS BIEN.--
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)
 */