"use strict";

window.onload = function() {
    const board = document.getElementById("board");
    const squares = board.children;
    let game_state = Array(squares.length).fill(null);
    const message = document.getElementById('status').textContent;
    const button = document.querySelector("button");
    let player;

    startGame();

    button.addEventListener('click',function(){
        game_state = Array(squares.length).fill(null);
        for (const square of squares) {
            square.textContent="";
            square.classList.remove('X');
            square.classList.remove('O');
        }
        // console.log(game_state);
        let status = document.getElementById('status');
        status.textContent=message;
        status.classList.remove('you-won');
        startGame();
    });


    function startGame(){
        player = 'X';   //set default player to X
        for(let count=0; count<squares.length;count++){
            let square = squares[count];
            let attr = document.createAttribute("location");
            attr.value = count;
    
            square.className="square";
            square.setAttributeNode(attr);
            
            square.onclick=function() {
                let classes=square.classList;
                square.textContent=player;
                classes.add(player);
                //set postion in game state to value X or O
                game_state[square.getAttribute('location')]=player;

                checkWinner(squares,game_state,Number(square.getAttribute('location')),player);
                square.onclick=null;
                    
                //changes control to next player
                if (player === 'X')
                    player = 'O';
                else
                    player = 'X';
            };//end square.onclick
    
    
            square.onmouseenter = function(){
                 square.classList.add('hover');   
            };//End mouse enter
    
            square.onmouseleave = function(){
                square.classList.remove('hover');
            };//end mouse leave
        }//End of For
    }//End start game


}//End of onLoad

//checlks for game winner
function checkWinner(squares,game_state,location,play){
    let status = document.getElementById('status');
    let p = [[0,1,2],[0,3,6],[0,4,8],
            [1,4,7],[2,5,8],[2,4,6],
            [3,4,5],[6,7,8]]

    //Determines Winner
    for(let x=0;x<p.length;x++){
        if(p[x].includes(location)){
            if((game_state[p[x][0]]===play) && (game_state[p[x][1]]===play) &&(game_state[p[x][2]]===play)){
                status.classList.add('you-won');
                status.textContent=`Congratulations! ${play} is the Winner!`

                for (const square of squares) {
                    square.onclick=null;
                    square.onmouseenter=null;
                    square.onmouseleave=null;
                }
                return;
            }
        }//ednd if
    }//end for
}//end checkWinner
