// For clicking
//on square click change to image 
// change turns between players 
// whos turn it is update in text display
// track all even turns are player 1 all odd turns are player 2
// once click box disable contunous clicking 

// make a single div clickable
// make each box clickable
// make sure selecting only box not all boxes(if statment with event target refer to add color picker exercise)
// make x or o show

// once it shows x or o div should become unclickable 
// x and o is a while loop

// after each turn evaluate if someone has won
// create a win condition
//check if someone has won
// 
// give box a class when it is clicked 
// how to set up how the computer can tell what player clicked what
// can you add a class when box is clicked?

//if div one div two div three then player wins
// make conditional for if player wins
// eight win conditions

// const selectDiv= document.getElementsByClassName('box');

// document.addEventListener('click', () =>{
//     document.getElementById('box1').addEventListener('click', clickResponse)
//     // document.getElementById('box1').innerHTML +="X" || "O";
//     console.log("It's clicking")
// });

// function clickResponse (){
//     let div= document.getElementById('box1');
    
//     div.removeEventListener('click', clickResponse)
   
// }
// clickResponse()

    // function markBox(){
    //     document.addEventListener('click', checkBox)
    //     // response.preventDefault();
    //         document.getElementById('box1').innerHTML +="X";
    //        if (document.getElementById('box1'))
    //     }
    // how to I make it let them know whos player turn is it
    // check if someone won 
    // 

// assigning colors to players and set color before they click the div
const nonColor = `rgb(252, 235, 3)`
const playerOneChoice = "X"
const playerTwoChoice = "O"

let playerTurn ="X"
let notClicked = [true , true , true , true , true , true , true , true , true]
let alreadyClicked = "This box is taken"

let turnNum= 1

function boxClick (blockNumber) {
    let currentBox = document.getElementById(`box${blockNumber}`)
    if(notClicked[blockNumber-1] === true){
        if (playerTurn === "X" ){
          notClicked[blockNumber-1]= false; 
        currentBox.innerText = ('X')
        playerTurn = "O"
        turnNum = turnNum +1 
        document.getElementById('playerMove').innerText =('Player 2\'s turn')
        return;
    } else if (playerTurn === "O"){
        notClicked[blockNumber-1]= true;
        currentBox.innerText = ('O')
        playerTurn = "X" 
        turnNum = turnNum +1 
        document.getElementById('playerMove').innerText =('Player 1\'s turn')
        return;
    }
}     
}


// function to check for win
function checkWin (){
    if (box1.innerText != "" && box1.innerText === box2.innerText && box1.innerText === box3.innerText || 
        box4.innerText != "" && box4.innerText === box5.innerText && box4.innerText === box6.innerText ||
        box7.innerText != "" && box7.innerText === box8.innerText && box7.innerText === box9.innerText ||
        box1.innerText != "" && box1.innerText === box4.innerText && box1.innerText === box7.innerText || 
        box2.innerText != "" && box2.innerText === box5.innerText && box2.innerText === box8.innerText || 
        box3.innerText != "" && box3.innerText === box6.innerText && box3.innerText === box9.innerText ||
        box1.innerText != "" && box1.innerText === box5.innerText && box1.innerText === box9.innerText || 
        box3.innerText != "" && box3.innerText === box5.innerText && box3.innerText === box7.innerText      
    ){
        document.getElementById('winner').innerText= playerTracker()
    }
    if (turnNum === 9){
        document.getElementById('winner').innerText= `It's a tie!` 
    }
    console.log("We have a winner!")
}

// calling each box 
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box6 = document.getElementById('box6')
let box7 = document.getElementById('box7')
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9')

// calling Player's move spot
let playerMove= document.getElementById('playerMove')

let winner= document.getElementById('winner')

// reset button
// let restartButton = document.getElementById('restartButton')
function restartButton (){
    box1.innerText =""
    box2.innerText =""
    box3.innerText =""
    box4.innerText =""
    box5.innerText =""
    box6.innerText =""
    box7.innerText =""
    box8.innerText =""
    box9.innerText =""
    playerMove.innerText=""
    winner.innerText =""
}

// // Player turn tracker function 
function playerTracker(){
    if (playerTurn === "X" && turnNum ===[5,7,9]){
        playerMove.innerText=""
        return "Player 2 has won!"
        
    } else {
        playerMove.innerText=""
        return "Player 1 has won!"
        
    }
}