let userscore = 0;
let botscore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
let userpara = document.querySelector("#user-score");
let botpara = document.querySelector("#Bot-score");
// msgc = document.querySelector(".msg-container")


const genbotchoice= () =>{
    let options = ["paper" , "rock" , "scissors"] ; 
    let rendomidx = Math.floor(Math.random()*3) ;
    return options[rendomidx];
}


const Displaywinner = (userWin) => {
    if(userWin)
    {
        userscore++ ;
        userpara.innerText = userscore ;
        console.log("You win!");
        msg.innerText = "You Win !" ;
        

      //  msg.classList.remove("bg-yellow");
       // msg.style.backgroundcolor = "green" ;
    }
    else{
       // console.log("You lose!") ;
      //  console.log(userWin);
      botscore++ ;
      botpara.innerText = botscore;
        msg.innerText = "You Lose!" ;
     //   msg.classList.remove("bg-yellow");
      //  msg.style.backgroundcolor = "red";
    }
}

const gamedraw = () => {
  //  console.log("Game  was  Draw") ;
    msg.innerText = "Game was draw ! please play again." ;
  //  msg.classList.remove("bg-yellow") ;
  //  msg.style.backgroundcolor = "yellow"
}


const playgame = (userchoice) => {
   //console.log("user's choice is - " , userchoice) ;
   //computer's choice 
   const botchoice = genbotchoice();
 //  console.log("Bot's choice is - " , botchoice) ;

   let userWin = false ; 
   if(userchoice === botchoice)
   {
      // Draw 
      gamedraw();
    }
    else{
        if(userchoice === "rock")
        {
            //scissor , paper 
           userWin =  botchoice === "paper" ? false  : true ;
        }

        if(userchoice === "paper")
        {
            //rock , scissor 
          userWin =   botchoice === "scissors" ? false : true ;
        }

        if(userchoice === "scissors")
        {
           userWin = botchoice === "rock" ? false : true ;

        }
        Displaywinner(userWin);
    }

   
}

choices.forEach((choice) => {
  //  console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
       // console.log("you clicked on",  userchoice)
       playgame(userchoice);
    })
});