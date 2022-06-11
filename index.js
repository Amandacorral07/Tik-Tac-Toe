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
const playerOneColor = `rgb(3, 252, 115)`
const playerTwoColor = `rgb(177, 3, 252)`


const playerOne = true
const playerTwo = false

let playerTurn = [playerOne, playerTwo]; 

if(playerOne){
    // let target =document.querySelector('box') try to find how to change div box not a certain one
    // target.style.backgroundColor = playerOneColor
} else {
    
}
// const playerMove = () => {
// for (let i= 0; i <9; i++){
//     if (playerOne[i]){

//     }
// }

// }



// for (let i=0; i< 9; i++){
//  if (playerOne === playerOne){
//      console.log("true")
//  } else if (playerOne !== playerOne) {
//      console.log("false")
//  }
// // Selecting all box divs one by ones
// let box1 = document.getElementById('box1')
// box1.addEventListener('click', function(event){
//    choosePlayer()
// })
// let box2 = document.getElementById('box2')
// box2.addEventListener('click', function(event){
//     box2.style.backgroundColor = playerOneColor


// function choosePlayer (event) {
//     if(playerOneTurn === playerOneTurn){
//         target.style.backgroundColor = playerOneColor
//     } else {
//         target.style.backgroundColor = playerTwoColor
//     }
//     choosePlayer()
//     console.log(choosePlayer())
//     // for(let playerOne=0, playerTwo=0; playerOne< 9, playerTwo <9; playerOne++, playerTwo){
//     //     box1.style.backgroundColor = playerOneColor
//     //     box1.backgroundColor = playerTwoColor
//     //     console.log(array[playerOne][playerTwo])
//     //     }
//     }







let box3 = document.getElementById('box3')
box3.addEventListener('click', function(event){
    box3.style.backgroundColor = playerOneColor
})
let box4 = document.getElementById('box4')
box4.addEventListener('click', function(event){
    box4.style.backgroundColor = playerTwoColor
})
let box5 = document.getElementById('box5')
box5.addEventListener('click', function(event){
    box5.style.backgroundColor = playerOneColor
})
// let box6 = document.getElementById('box6')
// box6.addEventListener('click', function(event){
//     if (playerOneTurn){
//         box6.style.backgroundColor = playerOneColor
//     }
//     box6.style.backgroundColor = playerOneColor
// })

// let box7 = document.getElementById('box7')
// box7.addEventListener('click', function(event){
//     box7.style.backgroundColor = playerOneColor
// })
// let box8 = document.getElementById('box8')
// box8.addEventListener('click', function(event){
//     box8.style.backgroundColor = playerOneColor
// })
// let box9 = document.getElementById('box9')
// box9.addEventListener('click', function(event){
//     box9.style.backgroundColor = playerOneColor
// }) 
// }
// for (let i=0; i< 9; i++){

// }

// function markBox(){
//             box1.innerHTML += (target.stylebackground = nonColor);
//         //    if (box1 === box1){

//         //    }

// //         }
// // const markBox = () =>{
// //     if (target.stylebackground = nonColor){
// //         console.log(markBox())
// //     }
// // }








// // const addColor = (event) => {
// //     const color = event.target.style.backgroundColor 
// //     const newColor = document.createElement('div')
// //     newColor.style.backgroundColor = color
// //     document.querySelector('box1').appendChild(newColor)
// // }
//  //try to make for loop to see if player has won

// // const divBox1 = document.querySelector('box1')
// //     while (divBox1.firstChild) {
// //         divBox1.removeChild(divBox1.firstChild)
// //     }

// //     for (let i = 0; i < 9; i++){
// //         const box = document.querySelector('box1')
// //         const playerOneColor = `rgb(3, 252, 115)`

// //         box.style.backgroundColor = playerOneColor
// //     }



// // // const markBox(event){
// // //     if 
// // //     document.getElementById('box2').value = "X";

// // // }
// //     // box2 = document.getElementById('box2').value
//     // box3 = document.getElementById('box3').value
//     // box4 = document.getElementById('box4').value
    // box5 = document.getElementById('box5').value
    // box6 = document.getElementById('box6').value
    // box7 = document.getElementById('box7').value
    // box8 = document.getElementById('box8').value
    // box9 = document.getElementById('box9').value
//     document.addEventListener('DOMContentLoaded', () => {
//         markBox()
//     })

// restartButton.addEventListener('click', )

// // function markBox 