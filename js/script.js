var turn = 'O';

var boxes = document.getElementsByClassName('div-nine');
var box1 = document.getElementById('div-1');
var box2 = document.getElementById('div-2');
var box3 = document.getElementById('div-3');
var box4 = document.getElementById('div-4');
var box5 = document.getElementById('div-5');
var box6 = document.getElementById('div-6');
var box7 = document.getElementById('div-7');
var box8 = document.getElementById('div-8');
var box9 = document.getElementById('div-9');
var divTwo = document.getElementById('div-two-p');
var turnCount = 0;

// var matrix = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]

// var test = -1;


// Player Turn
function changeTurn(element){
    // console.log("changeTurn() is called...")
    if (turn == 'X'){
        element.innerText = 'O';
        divTwo.innerHTML = "Turn 'X'"
        turn = 'O';
    }
    else if (turn == 'O'){
        element.innerText = 'X';
        divTwo.innerHTML = "Turn 'O'"
        turn = 'X';
    }
    element.disabled = true

    // winning logic
    // row check
    if (box1.textContent =='X' && box2.textContent == 'X' && box3.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box4.textContent =='X' && box5.textContent == 'X' && box6.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box7.textContent =='X' && box8.textContent == 'X' && box9.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box1.textContent =='X' && box4.textContent == 'X' && box7.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box2.textContent =='X' && box5.textContent == 'X' && box8.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box3.textContent =='X' && box6.textContent == 'X' && box9.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }

    // column check
    else if (box1.textContent =='O' && box2.textContent == 'O' && box3.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box4.textContent =='O' && box5.textContent == 'O' && box6.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box7.textContent =='O' && box8.textContent == 'O' && box9.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box1.textContent =='O' && box4.textContent == 'O' && box7.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box2.textContent =='O' && box5.textContent == 'O' && box8.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box3.textContent =='O' && box6.textContent == 'O' && box9.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }


    // diagonal check
    else if (box1.textContent =='X' && box5.textContent == 'X' && box9.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box3.textContent =='X' && box5.textContent == 'X' && box7.textContent == 'X'){
        divTwo.innerHTML = "'X' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box1.textContent =='O' && box5.textContent == 'O' && box9.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }
    else if (box3.textContent =='O' && box5.textContent == 'O' && box7.textContent == 'O'){
        divTwo.innerHTML = "'O' is won..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }

    // else if ((box1.textContent == 'X' || box1.textContent == 'O') && (box2.textContent == 'X' || box2.textContent == 'O') && (box3.textContent == 'X' || box3.textContent == 'O') && (box4.textContent == 'X' || box4.textContent == 'O') && (box5.textContent == 'X' || box5.textContent == 'O') && (box6.textContent == 'X' || box6.textContent == 'O') && (box7.textContent == 'X' || box7.textContent == 'O') && (box8.textContent == 'X' || box8.textContent == 'O') && (box9.textContent == 'X' || box9.textContent == 'O')) {
    //     divTwo.innerHTML = "Match is draw..."
    //     for(let i in boxes){
    //         boxes[i].disabled = true;
    //     }
    // }

    turnCount += 1
    if (turnCount == 9){
        divTwo.innerHTML = "Match draw..."
        for(let i in boxes){
            boxes[i].disabled = true;
        }
    }

    
    
    
    // row check
    // if (matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2]){
    //     test = matrix[0][0] // 1 means win
    //     console.log("success....")
    // }
    // else if ((matrix[1][0] == matrix[1][1]) && (matrix[1][1] == matrix[1][2])){
    //     test = 1 // 1 means win
    // }
    // else if ((matrix[2][0] == matrix[2][1]) && (matrix[2][1] == matrix[2][2])){
    //     test = 1 // 1 means win
    // }

    // // column check
    // else if ((matrix[0][0] == matrix[1][0]) && (matrix[1][0] == matrix[2][0])){
    //     test = 1 // 1 means win
    // }
    // else if ((matrix[0][1] == matrix[1][1]) && (matrix[1][1] == matrix[2][1])){
    //     test = 1 // 1 means win
    // }
    // else if ((matrix[0][2] == matrix[1][2]) && (matrix[1][2] == matrix[2][2])){
    //     test = 1 // 1 means win
    // }

    // // diagonal check
    // else if ((matrix[0][0] == matrix[1][1]) && (matrix[1][1] == matrix[2][2])){
    //     test = 1 // 1 means win
    // }
    // else if ((matrix[0][2] == matrix[1][1]) && (matrix[1][1] == matrix[2][0])){
    //     test = 1 // 1 means win
    // }

    // console.log(test)
}




function restart_func(){
    location.reload()
}


















// Explore


// var nestedArray = ['maruf', 11, ['physics', 250]]
// console.log(nestedArray[2][0])



// var ami = document.querySelectorAll('[ami]')
// console.log(ami)





// Player Turn
// function changeTurn1(){
//     if (turn == 'X'){
//         box1.innerText = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box1.innerText = 'X'
//         turn = 'X'
//     }
//     box1.disabled = true
// }
// function changeTurn2(){
//     if (turn == 'X'){
//         box2.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box2.innerHTML = 'X'
//         turn = 'X'
//     }
//     box2.disabled = true
// }
// function changeTurn3(){
//     if (turn == 'X'){
//         box3.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box3.innerHTML = 'X'
//         turn = 'X'
//     }
//     box3.disabled = true
// }
// function changeTurn4(){
//     if (turn == 'X'){
//         box4.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box4.innerHTML = 'X'
//         turn = 'X'
//     }
//     box4.disabled = true
// }
// function changeTurn5(){
//     if (turn == 'X'){
//         box5.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box5.innerHTML = 'X'
//         turn = 'X'
//     }
//     box5.disabled = true
// }
// function changeTurn6(){
//     if (turn == 'X'){
//         box6.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box6.innerHTML = 'X'
//         turn = 'X'
//     }
//     box6.disabled = true
// }
// function changeTurn7(){
//     if (turn == 'X'){
//         box7.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box7.innerHTML = 'X'
//         turn = 'X'
//     }
//     box7.disabled = true
// }
// function changeTurn8(){
//     if (turn == 'X'){
//         box8.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box8.innerHTML = 'X'
//         turn = 'X'
//     }
//     box8.disabled = true
// }
// function changeTurn9(){
//     if (turn == 'X'){
//         box9.innerHTML = 'O'
//         turn = 'O'
//     }
//     else if(turn == 'O'){
//         box9.innerHTML = 'X'
//         turn = 'X'
//     }
//     box9.disabled = true
// }