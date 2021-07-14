let quadro = ["", "", "", "", "", "", "", "", ""]; //VETOR DA MINHA PAG, COM 9 QUADRADOS
let jogadorVez = 0; //VERIFICO QUAL JOGADOR QUE JOGOU 0 OU 1
let simbolo = ["o", "x"]; //O = CIRXULO, X = E X
let fimGame = false;


function movimento(posicao){

    if(fimGame){
        return;
    } 
    // RECEBE A POSIÇÃO AONDE REALIZEI MEU CLICK E RESETO CD JOGADA
    if (quadro[posicao] == ""){

        quadro[posicao] = simbolo[jogadorVez];

        fimGame = vencedor();

        
        if(fimGame == false){
            if(jogadorVez == 0){
                jogadorVez = 1;
            }
            else{
                jogadorVez = 0;
            }
        }
    }

    return fimGame;
   
}

function vencedor(){
    let estadosVencedor = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let empate = false;
    for(let i = 0; i < estadosVencedor.length; i++){
        let sequencia = estadosVencedor[i];
        
        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];


        if(quadro[pos1] == quadro[pos2] && quadro[pos1] == quadro[pos3] && quadro[pos1] != ""){
            return true;
        }
    }

    if (quadro[0] != ''
            && quadro[1] != '' 
            && quadro[2] != '' 
            && quadro[3] != '' 
            && quadro[4] != '' 
            && quadro[5] != '' 
            && quadro[6] != '' 
            && quadro[7] != '' 
            && quadro[8] != '') {
                
                empate = true;
                
         }

    return false;

}