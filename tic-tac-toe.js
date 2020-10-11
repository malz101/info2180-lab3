"use strict";

window.onload = function() {
    const board = document.getElementById("board");
    const squares = board.children;
    let game_state = Array(squares.length).fill(null);
    
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
            // console.log(game_state);
            // console.log(element.getAttribute('location'));
            // console.log(Object.values(squares).indexOf(element));
        });//end Click


        square.addEventListener('mouseenter',function(){
             square.classList.add('hover');   
        });//End mouse enter

        square.addEventListener('mouseleave',function(){
            square.classList.remove('hover')
        });//end mouse leave
    }//End of For


}//End of onLoad
    
    // board.querySelectorAll(".square").forEach((element)=>{
    // });