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

// assigning colors to players and set color before they click the div
// const playerOneChoice = "X"
// const playerTwoChoice = "O"

let playerTurn ="X"
let notClicked = [true , true , true , true , true , true , true , true , true]
// let alreadyClicked = "This box is taken"

let turnNum= 0

// calling each box 
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let box6 = document.getElementById('box6')
let box7 = document.getElementById('box7')
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9')

let container = document.getElementById('container')

// calling Player's move spot
let playerMove= document.getElementById('playerMove')

let winner= document.getElementById('winner')


function boxClick (blockNumber) {
    let currentBox = document.getElementById(`box${blockNumber}`)
    currentBox.document.addEventListener('click', stopClicker)
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

function stopClicker (){
    currentBox.target.removeEventListener('click', stopClicker)

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
        
        console.log("We have a winner!")
    }
    else if (turnNum === 9){
        document.getElementById('winner').innerText= "It's a tie!"
    }
}


// const stopClicker = document.querySelectorAll('box')
//         box1.addEventListener('click', (event)=>{
//             event.preventDefault
//         }) 

// reset button
resetButton.addEventListener('click', function(event){
    location.reload()
})


// // Player turn tracker function 
function playerTracker(){
    if (playerTurn === "X" && turnNum ===[3,5,7,9]){
        playerMove.innerText=""
        console.log("player one has won")
        return "Player 1 has won!"
        
    } else {
        playerMove.innerText=""
        console.log("player two has won")
        return "Player 2 has won!"
        
    }
}
