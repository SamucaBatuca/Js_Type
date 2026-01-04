var imagem = document.querySelector("div#imagem")
var esq = document.getElementById("Esquerda") // SETA O OBJETO QUE VC QUER
var dir = document.getElementById("Direita")
var fre = document.getElementById("Frente")

esq.addEventListener("click",Esquerda)   // ADICIONA UM LISTENNER E, QUANDO EXACUTADO, CHAMA A FUNÇÃO
fre.addEventListener("click",Frente)     // FUNÇÕES SEM PARENTESES!!!!
dir.addEventListener("click",Direita) 

imagem.innerHTML = '<img src="frente.png" alt="">'


function Esquerda(){
    imagem.innerHTML = '<img src="Esquerda.png" alt="">'
}

function Frente(){
    imagem.innerHTML = '<img src="frente.png" alt="">'
}

function Direita(){
    imagem.innerHTML = '<img src="Direita.png" alt="">'
}
