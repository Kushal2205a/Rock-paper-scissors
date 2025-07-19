function getComputerChoice(){
    const choices = {
        "STONE" : Math.random(),
        "PAPER" : Math.random(),
        "SCISSOR": Math.random()
        }; 
    maxKey = Object.keys(choices).reduce((a,b) => choices[a] > choices[b] ? a : b) ; 
    console.log(maxKey)

    return maxKey ;

}



function getHumanChoice(){
    let h_choice = prompt("Please type one among Stone, Paper, Scissor") ; 
    h_choice = h_choice.toUpperCase() ; 

    const choices = ["STONE", "PAPER", "SCISSOR"] ; 

    if (!choices.includes(h_choice)){
        getHumanChoice()
    }

    return h_choice

}



let human_score = 0, computer_score = 0 ; 

function game_logic(Human_Selection, Computer_Selection){    
    const game_logic = {
        "STONE" :  "SCISSOR" , 
        "SCISSOR" : "PAPER", 
        "PAPER" : "STONE"

    }

    if ( Human_Selection == Computer_Selection){
        
        console.log("draw")
    }
    else if (game_logic[Human_Selection] == Computer_Selection){
        human_score = human_score + 1 ;
        
        console.log("Human wins")
    } 

    else{
        computer_score = computer_score + 1 ;
        
        console.log("Computer wins")
    }

    return human_score,computer_score ; 

}


function playRound(){
    for (let i = 0 ; i < 5 ; i++){
        const Computer_Selection = getComputerChoice();
        const Human_Selection = getHumanChoice();  
        game_logic(Human_Selection, Computer_Selection);
    }

    if (human_score > computer_score) {
        alert ("You win ") ; 
    }
    else if (human_score == computer_score){
        alert("It's a draw") ; 
    }
    else {
        alert("The computer wins")
    }
}


function n_Rounds(n){
    for (let round = 0 ; round < n ; round++){
        playRound();
    }
}

n_Rounds(5);