const box=document.getElementsByClassName("box")
const snake={}
snake.headPosition=90
snake.length=4
snake.speed=100
snake.virtualHeadPos=0
var snakeGameOption="classic"
var numberOfGrids=100
var gridOfreference=0
function gameloop(){
setInterval(() => { 
    var snakeTailPos;
   
    snakeTailPos=snake.headPosition-snake.length
    //var virtualSnakeHead=snake.headPosition
    box[snake.headPosition].style.background="red"
    snakeTailPos>=gridOfreference?box[snakeTailPos].style.background="transparent":""
console.log(snakeTailPos) 


if(snake.headPosition>snake.length&&(snake.headPosition+1)%(numberOfGrids/10)===0){
    if(snakeGameOption==="classic"){
         snake.virtualHeadPos=snake.headPosition
         snake.headPosition-=numberOfGrids/10
    }else{
        //gameOver()
    }
   
}
    snake.headPosition++ 
    


    
    //snake control
   document.addEventListener("keypress",()=>{
    console.log("iam presed")
   })
}, snake.speed);
}
gameloop()