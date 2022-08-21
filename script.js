console.log("Welcome to the Game")
let music = new Audio("ingame.mp3")
let turnm = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn ="X"
let gamefinish=false;
//func to change turn
const changeturn=()=>{
    return turn==="X"?"0": "X"
}
//func to checkwin
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " Won"
            gamefinish=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
            document.querySelector('.line').style.width="20vw"

            document.querySelector('.line').style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}
//game logic
//music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn; 
            turn=changeturn();
            turnm.play();
            checkwin();
            if(!gamefinish){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})

//reseting the game
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    gamefinish=false;
    document.querySelector('.line').style.width="0"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})

