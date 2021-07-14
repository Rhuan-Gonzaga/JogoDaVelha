// DISPARA UM EVENTO QUANDO MINHA PAG HTML É CARREGADA
document.addEventListener("DOMContentLoaded",()=>{

    let quadrados= document.querySelectorAll(".square")

    // FAZ UMA VARREDURA NOS MEUS QUADRADOS E DISPARA UM EVENTO A CADA CLICK
    quadrados.forEach((square)=>{
        square.addEventListener("click",escolhido);
    })
})



function escolhido(evento){
    let quadrado = evento.target; //ATRIBUI A MINHA DIV A QUADRADO
    let posicao = quadrado.id; //POSICAO RECEBE A POSICAO DO MEU VETOR
   

    if(movimento(posicao)){
        
        setTimeout(() => {
            alert("O Jogo Acabou! O jogador vencedor foi " + Number(jogadorVez+1))
        },10)
    }

    atualizar();
}

function atualizar(){

    let quadrados= document.querySelectorAll(".square")

    quadrados.forEach((quadrado)=>{
        let posicao = quadrado.id; //RECEBE TODAS AS POSIÇOES DO MEU VETOR
        let simbolo = quadro[posicao]; //SIMBOLO RECEBE A POSICAO QUE FOI CLICADA NO QUADRO

        if (simbolo != ""){
            quadrado.innerHTML = `<div class="${simbolo}"></div>` //MOSTRO O MEU EMOJI NA POSIÇÃO CLICADA
        }
    })

    
}

function resetar(){
        window.location.reload();
    }
