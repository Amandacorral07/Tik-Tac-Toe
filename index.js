let playerTurn ="X"
const notClicked = [true , true , true , true , true , true , true , true , true]
// let alreadyClicked = "This box is taken"

// making player turn start at 0 to use when counting number of moves
let turnNum= 0

// calling each box 
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')

//calling container spot
const container = document.getElementById('container')

// calling Player's move spot
const playerMove= document.getElementById('playerMove')

//calling winner spot
const winner= document.getElementById('winner')

// function to allow a player to click a box and appear X or O
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
        console.log("We have a winner!")
        stopClicker()
    }
    else if (turnNum === 9){
        document.getElementById('winner').innerText= "It's a tie!"
    }
}

// stop buttons from clicking once there is a winner
function stopClicker (){
    for (let i=0; i < notClicked.length; i++){
        notClicked[i] = false
    }
}

// Reset button
resetButton.addEventListener('click', function(event){
    location.reload()
})


// Player turn tracker function 
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
