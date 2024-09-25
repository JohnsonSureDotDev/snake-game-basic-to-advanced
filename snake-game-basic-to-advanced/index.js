const box=document.getElementsByClassName("box")
const snake={}
snake.headPosition=90
snake.length=4
snake.speed=100
snake.virtualHeadPos=0
snake.headTrail={}
snake.headTrail.position=[]
snake.headTrail.increment=[]
var snakeGameOption="classic"
var numberOfGrids=100
var tileOfreference=0
var incrementOrDecrement=1
function gameloop(){
setInterval(() => { 
    snake.headTrail.position.push(snake.headPosition)
    var snakeTailPos;
   box[snake.headPosition].style.background="red"
    snakeTailPos=snake.headPosition-snake.length
    
    //code below is for colouring every tile that the snake tail passes through
    console.log(snake.headTrail.position)
    snakeTailPos>=tileOfreference?box[function (){
    
        
           return  snake.headTrail.position[snake.headTrail.position.length-snake.length]
             // snake.headTrail.position.pop(snake.headTrail.position[snake.headTrail.position.length-1])
        snakeTailPos
    }()].style.background="transparent":""

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
    console.log(snake.headTrail.position)
    console.log(snake.headTrail.increment)


    
    //snake control
   document.addEventListener("keypress",()=>{
    console.log("iam presed")
   })
}, snake.speed);
}
gameloop()