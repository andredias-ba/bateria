
 function tocarPom(){
    document.querySelector('#som_tecla_pom').play();
}


function tocar(id){
//     alert(id);
     let som = "#"+listaDeMusicas[id].getAttribute('id');
    // alert(som)
     document.querySelector(som).play();
 }
 

function tocarSom(id){
    const som = new Audio('./sounds/keyq.wav');
    som.play();
}

// MODO 1
/*

let btPom = document.querySelector('.tecla_pom');

btPom.addEventListener('click', function(){
   tocarSom();
});
*/

const listaDeMusicas = document.querySelectorAll('.som');
const listaDeTeclas = document.querySelectorAll('.tecla');

// MODO 2 
/*
function tocaSom(idElementoAudio){ // function do curso
    document.querySelector(idElementoAudio).play();
}

let cont = 0;

while (cont < listaDeTeclas.length){
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    cont++;
}
*/

//MODO 3

function tocaSom(seletorAudio){ // function do curso
    const elemento = document.querySelector(seletorAudio);
    //if (elemento && elemento.localName === 'audio'){ tb funciona só o elemento sem o !=null
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
   } else {
    alert("elemento não encontrado!");  
    }
} // fim tocasom


for (let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

} // fim for

// outra forma de fazer esse loop
/*
document.querySelectorAll('.tecla').forEach(function(tecla){
    tecla.addEventListener('click', function(){
        this.classList.add('ativa');
    });
});
*/

// loop inserindo e retirando a class ativa
/*
document.querySelectorAll('.tecla').forEach(function(tecla){
    tecla.addEventListener('click', function(event){
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('ativa')){
            elementoClicado.classList.remove('ativa');
        } else{
            elementoClicado.classList.add('ativa');
        }
    });
});
*/




