let box=document.querySelectorAll(".box1");
let reset=document.querySelector("#reset");
let new_game=document.querySelector("#newgame");
let mesg=document.querySelector("#msg");
let msg_container=document.querySelector(".mes_container");
let turnO=true;

const winParttern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const  reset_game=()=>{
    turnO=true;
    anableboxex();
    msg_container.classList.add("hide");
}

box.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        
        if(turnO){
            box1.innerText="O";
            turnO=false;
        }
        else{
            box1.innerText="X";
            turnO=true;
        }
        box1.disabled=true;
        checkWinner();
    });
});

const box_disable=()=>{
  for( let box1 of box){
       box1.disabled=true;
  }
}

const anableboxex=()=>{
    for(let box1 of box){
        box1.disabled=false;
        box1.innerText="";
    }
}

const show_winner=(winner)=>{
    
    mesg.innerText=`congratulation the winner is ${winner}` ;
    msg_container.classList.remove("hide");
    box_disable()



}
const show_messege=(winner)=>{
    
    mesg.innerText=` ${winner}` ;
    msg_container.classList.remove("hide");
    box_disable()



}

let checkWinner=()=>{
    let winnerFind=false;
for (let partern of winParttern){
    let pos1val=box[partern[0]].innerText;
    let pos2val=box[partern[1]].innerText;
    let pos3val=box[partern[2]].innerText;
    if(pos1val!=""&& pos2val!=""&&pos3val!="")
    {
      
    if(pos1val==pos2val && pos2val==pos3val){
        winnerFind=true;
        show_winner(pos1val);
        return;
    }

    }
}
  if(!winnerFind){
    let filled=[...box].every(b=>b.innerText!="");
    if(filled){
        show_messege("match is  Draw")
    }
  }

};
   new_game.addEventListener("click",reset_game);
   reset.addEventListener("click",reset_game);
   
