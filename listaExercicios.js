const contador = document.querySelector('input[type=number]');
const botao = document.querySelector('input[type=button]');

let cont = contador.value;
botao.onclick = function(){
    cont++;
    contador.value = cont;
}