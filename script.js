
const player1 = '❌';
const player2 = '⭕';

var vector,turn,winner;

function gameStart(){
    vector = ['','','','','','','','',''];
    winner = false
    turn = Math.random() < 0.5; //true == player 1 && false == player 2   
}

function getIndex(vRow,vColumn){
    return (parseInt(vRow)-1)*3+parseInt(vColumn-1);
}

function clickSquare(element){
    const index = getIndex(element.getAttribute('data-linha'), element.getAttribute('data-coluna'));
     
    if(vector[index] === '' && !winner){
        if(turn){
            vector[index]=player1;
            element.innerHTML=player1;
        }
        else{
            vector[index]=player2;
            element.innerHTML=player2;
        }
        
        var result = checkWinner();
        if(result) {
            const jogador = document.querySelector('#jogadorDoTurno');
            if(turn){
                jogador.innerText = player1 + ' GANHOU!';
                winner = true;
            }else{
                jogador.innerText = player2 + ' GANHOU!';
                winner = true;
            }
        }
        else{
            turn = !turn;
            const jogador = document.querySelector('#jogadorDoTurno');
            if(turn){
                jogador.innerText = player1;
             }else{
                 jogador.innerText = player2;
             }
        }
        
    }
}   

function checkWinner(){
    let row, column,diag, winner = undefined;
    //checkRows and check columns
    for(let i=0; i<3; i++){
        row = vector[i*3]+vector[i*3+1]+vector[i*3+2];
        column = vector[i] + vector[i+3] + vector[i+6];
        if(row === '❌❌❌' || column === '❌❌❌')
            return '❌';
        if(row === '⭕⭕⭕' || column === '⭕⭕⭕')
            return '⭕';
    }
    //check diag
    diag = vector[0] + vector[4] + vector [8];
    if(diag === '❌❌❌')  return '❌';
    if(diag === '⭕⭕⭕')  return '⭕';
    diag = vector[2] + vector[4] + vector [6];
    if(diag === '❌❌❌')  return '❌';
    if(diag === '⭕⭕⭕')  return '⭕';

    return winner;
}

function reiniciar(){
    let elements = document.getElementsByClassName("quadro");
    for(e of elements){
        e.innerHTML = '';
    }
    gameStart();
    const jogador = document.querySelector('#jogadorDoTurno');
    if(turn){
       jogador.innerText = player1;
    }else{
        jogador.innerText = player2;
    }
}