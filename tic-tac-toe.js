"use strict";

window.onload = function() {
    const board = document.getElementById("board");
    const squares = board.children;
    // console.log(squares[0])
    // squares[0].className="square";
    // console.log(squares[0])
    for(let count=0; count<squares.length;count++){
        squares[count].className="square";
    }
}