"use strict";

window.onload = function() {
    const board = document.getElementById("board");
    const squares = board.children;
    let game_state = Array(squares.length).fill(null);
    const message = document.getElementById('status').textContent;
    
    
    for(let count=0; count<squares.length;count++){
        let square = squares[count];
        let attr = document.createAttribute("location");
        attr.value = count;

        square.className="square";
        square.setAttributeNode(attr);

        square.addEventListener("click", function() {
            let classes=square.classList;

            if(classes.contains('X')){
                classes.replace('X','O');
                square.textContent='O';
            }
            else if(classes.contains('O')){
                classes.replace('O','X');
                square.textContent='X';
            }
            else{
                classes.add('X');
                square.textContent='X';
            }//Endif

            
            //set postion in game state to value X or O
            game_state[square.getAttribute('location')]=square.textContent;
            
        });//end Click


        square.addEventListener('mouseenter',function(){
             square.classList.add('hover');   
        });//End mouse enter

        square.addEventListener('mouseleave',function(){
            square.classList.remove('hover')
            if (square.textContent!==""){
                checkWinner(Number(square.getAttribute('location')),square.textContent);
            }
        });//end mouse leave
    }//End of For

    const button = document.querySelector("button");
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
    });


    function checkWinner(location,play){
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
                    return;
                }
            }//ednd if
        }//end for
    }//end checkWinner 
}//End of onLoad
    
    // board.querySelectorAll(".square").forEach((element)=>{
    // });