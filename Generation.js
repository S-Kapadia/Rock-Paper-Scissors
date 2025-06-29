function ComputerGeneration() {
    const min = 0
    const max = 2
    let gen = Math.floor(Math.random() * (max-min + 1)+ min) //gen stands for generated number
    return gen
}

function ComputerChoice(compnum){
    let string;
    if (compnum === 0){
         string = "Rock"
    }
    else if (compnum === 1){
         string = "Paper"
    }
    else {
         string = "Scissors"
    }
    return string;
}

function HumanChoice(input){
    let choice;
    if (input == "Rock"){
         choice = 0
    }
    else if (input == "Paper"){
         choice = 1
    }
    else{
         choice = 2
    }
    return choice
}

function inputchecker(input){
    if (input !== "Rock" && input !== "Paper" && input !== "Scissors"){
        return 0} //invalid input
    else {
        return 1
    }
}

function Winner(humanchoice, compchoice){
    if (compchoice == humanchoice){
        return 0 //tie
    }
    else if ((humanchoice===0 & compchoice===2) ||(humanchoice===1 & compchoice ===0) ||(humanchoice===2 & compchoice===1)){
        return 2 //win
    }
    else{
        return 1 //loss
    }
}

function Score(humanscore, compscore, result) {
  if (result < 1) {
    return { human: humanscore, comp: compscore };
  } else if (result === 1) {
    return { human: humanscore, comp: compscore + 1 };
  } else {
    return { human: humanscore + 1, comp: compscore };
  }
}

function Round(input, score){   
    if (inputchecker(input) ===0){
        return {valid: false,
         message: "Invalid input, please try again following the provided guidelines!"}
    }

    let human = HumanChoice(input)
    let  comp = ComputerGeneration()
    let computer = ComputerChoice(comp)//changes number to word
    let result = Winner(human, comp)

    let outcomeMessage;
    if (result ===0) outcomeMessage = "You Tied!"
    else if (result ===1) outcomeMessage = "You Lost!"
    else outcomeMessage = "You WIN !!!!"

    const updatedScores = Score(score.human, score.comp, result)
    score.human = updatedScores.human;
    score.comp = updatedScores.comp;

    return {
    valid: true,
    playerChoice: input,
    computerChoice: computer,
    result: outcomeMessage,
    scores: { ...score }
    };

}

