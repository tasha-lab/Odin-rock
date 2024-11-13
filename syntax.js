console.log('hello world');

const options = ["rock", "paper", "scissors"];

function getcomputerchoice(){
    const choice = options[Math.floor (Math.random() * options.length)];
    console.log(choice);
    return choice;

}


function gethumanchoice(){
    let validatedinput =false;
    while(validatedinput==false){
     const choice = prompt ("enter either rock, paper or scissors");
     if (choice == null){
         continue;
        }
     const choiceinlower = choice.toLowerCase(); 
     if (options.includes(choiceinlower)){
        validatedinput = true;
        return choiceinlower;
     }   
     
    }  
}
//console.log(gethumanchoice());//




function checkwinner(humanchoice, computerchoice){
    if(humanchoice== computerchoice){
        return "Tie";
    }
    else if (
        (humanchoice == 'rock'&& computerchoice == 'scissors') ||
        (humanchoice == 'scissors' && computerchoice == 'paper') ||
        (humanchoice == 'paper' && computerchoice == 'rock')
    ){
        return "Player";
    }
    else {
        return "computer";
    }
}

function playRound(humanchoice, computerchoice){
    const result = checkwinner (humanchoice, computerchoice);
    if (result == "Tie"){
        return "IT IS A TIE";
    }
    else if(result == "Player"){
        return `YOU WIN ${humanchoice} beats ${computerchoice}`;
    }
    else{
        return `COMPUTER WINS ${computerchoice} beats ${humanchoice}`;
    }
}
const humanchoice = "rock";
const computerchoice = getcomputerchoice();
console.log (playRound(humanchoice,computerchoice));

function playgame(){
    let humanscore = 0;
    let computerscore = 0;
    console.log('welcome');
    for (let i=0; i<5; i++){
        const humanchoice= gethumanchoice();
        const computerchoice = getcomputerchoice();
        console.log (playRound(humanchoice, computerchoice));
        if (checkwinner (humanchoice,computerchoice) == 'Player'){
            humanscore++;
        }
        else if (checkwinner (humanchoice, computerchoice) == 'computer'){
            computerscore++;
        }
    }
    if(humanscore > computerscore){
        console.log (' CONGRATULATIONS, YOU WIN!');
    }
    else if(computerscore > humanscore){
        console.log ('NICE TRY, COMPUTER WINS!');
    }
    else{
        console.log ('ITS A TIE!');
    }

}
playgame();
  
// getcomputerchoice();//


//console.log("Human Score " + humanScore);
//console.log("Computer Score " + computerScore);//