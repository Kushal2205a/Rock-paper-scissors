let human_score = 0 , computer_score = 0 ; 
let humansc, aisc, rno ; 
let round_no = 0; 


function getComputerChoice(){
    const choices = {
        "Stone" : Math.random(),
        "Paper" : Math.random(),
        "Scissor": Math.random()
        }; 
    maxKey = Object.keys(choices).reduce((a,b) => choices[a] > choices[b] ? a : b) ; 

    return maxKey ;

}

function setupEventlisteners(){
    document.querySelector("#stone").addEventListener("click", () => game_logic("Stone"))
    document.querySelector("#paper").addEventListener("click", () => game_logic("Paper"))
    document.querySelector("#scissor").addEventListener("click", () => game_logic("Scissor"))
}

function scoredisplay(){
    humansc = document.querySelector("#h_sc")
    aisc = document.querySelector("#a_sc")
    rno = document.querySelector("#rsc")
}


function game_logic(Human_Selection){
    
    const Computer_Selection = getComputerChoice();
    

    const game_logic = {
        "Stone" :  "Scissor" , 
        "Scissor" : "Paper", 
        "Paper" : "Stone"

    }

    if ( Human_Selection == Computer_Selection){
        
        alert("draw")
    }
    else if (game_logic[Human_Selection] == Computer_Selection){
        human_score = human_score + 1 ;
        humansc.textContent = human_score; 
        
    } 

    else{
        computer_score = computer_score + 1 ;
        aisc.textContent = computer_score ;
    }

    if (human_score + computer_score === 5){
        if (human_score > computer_score) {
            alert ("You win ") ; 
        }
        else if (human_score == computer_score){
            alert("It's a draw") ; 
        }
        else {
            alert("The computer wins")
        }

        human_score = 0 
        computer_score = 0 
        humansc.textContent = '0'
        aisc.textContent = '0'

        if(round_no === 5){
            alert("You have played 5 rounds")
        }
        else{
            round_no++
            rno.textContent = round_no
        }

        

        

    }

    



}


console.log(document.querySelector("#h_sc")); 
window.onload = () =>{

    scoredisplay();
    setupEventlisteners();



}



// function n_Rounds(n){
//     for (let round = 0 ; round < n ; round++){
//         playRound();
//     }
// }
// n_Rounds(5);

