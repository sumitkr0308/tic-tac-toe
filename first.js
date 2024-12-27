
let turn ="O";
const winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
let boardArray= new Array(9).fill("E");
function checkWinner(){
    for(let [index0,index1,index2] of winner){

        if(boardArray[index0]!="E"&& boardArray[index0]===boardArray[index1] && boardArray[index1]===boardArray[index2])
            return 1;
    }
    return 0;
}
let totalTurn=0;

const print=(event)=>{

    const element = event.target;
    if(boardArray[element.id]==="E"){
        totalTurn++;
    if(turn==="O"){
        element.innerHTML="O";
        boardArray[element.id]="O";
        turn ="X"
        document.getElementById('imgo').style.height="140%";
        document.getElementById('imgx').style.height="100%";

        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML="Winner is O";
            board.removeEventListener('click',print);
            return;
        }
    }
    else{
         element.innerHTML="X";
         boardArray[element.id]="X";
        turn ="O";
        document.getElementById('imgo').style.height="100%";
        document.getElementById('imgx').style.height="140%";
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML="Winner is X";
            board.removeEventListener('click',print);
            return;
        }
    }

    }
    if(totalTurn===9){
        document.getElementById('winningMessage').innerHTML="Match is Draw!";
        board.removeEventListener('click',print);
        document.getElementById('imgo').style.height="100%";
        document.getElementById('imgx').style.height="100%";
    }

}
const board=document.querySelector('.board');
board.addEventListener('click',print);

const restart=document.getElementById('restartButton');
restart.addEventListener('click',()=>{
    // make empty the cell
    const cell=document.querySelectorAll('.cell');
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })
    document.getElementById('winningMessage').innerHTML="";
    totalTurn=0;
    turn="O";
    boardArray = new Array(9).fill("E");
    board.addEventListener('click',print);
    document.getElementById('imgo').style.height="100%";
    document.getElementById('imgx').style.height="100%";

})