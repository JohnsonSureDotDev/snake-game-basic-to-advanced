
const box=document.getElementsByClassName("box")
const snake={}
snake.headPosition=0
snake.length=2
snake.speed=100
snake.virtualHeadPos=0
snake.headTrail={}
snake.headTrail.position=[]
snake.headTrail.increment=[]
let snakeGameOption="classic"
let numberOfGrids=100
let tileOfreference=0
let incrementOrDecrement=10
let fruitPosition

//random fruit
fruitIsEaten = function(){
    fruitPosition=Math.floor(Math.random()*98)  
  box[fruitPosition].style.backgroundColor="green"
  return fruitPosition
  }
  fruitIsEaten()



function gameloop(){
setInterval(() => { 
    snake.headTrail.position.push(snake.headPosition)
    let snakeTailPos;

//snake growing script
if(snake.headPosition===fruitPosition){
    snake.length+=1
    fruitIsEaten()
}


   box[snake.headPosition].style.background="red"
    snakeTailPos=snake.headPosition-snake.length
    
    //code below is for colouring every tile that the snake tail passes through
    snake.headTrail.position.length>=snake.length+1?box[(()=>{
 return(snake.headTrail.position[snake.headTrail.position.length-snake.length-1]??50===fruitPosition?51:50  )     
    })()].style.background="transparent":""

    //code below is for snake head to loop one end to another
if(snake.headPosition>snake.length&&(snake.headPosition+1)%(numberOfGrids/10)===0){
    if(snakeGameOption==="classic"){
         snake.virtualHeadPos=snake.headPosition
         snake.headPosition-=numberOfGrids/10
    }else{
        //gameOver() code here
    }
   
}


snake.headTrail.increment.push(incrementOrDecrement)
    snake.headPosition+=incrementOrDecrement
 
    //snake control
   document.addEventListener("keypress",()=>{

   })
}, snake.speed);
}
gameloop()

//best practices applied
/* 
non nullish coalescin operator 
use of let instead of let  
*/