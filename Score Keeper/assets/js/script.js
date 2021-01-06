var winningScore = 5;
var p1Score = 0;
var p2Score = 0;
gameOver = false;
var p1Btn = document.querySelector("button.player-1");
var p2Btn = document.querySelector("button.player-2");
var p1 = document.querySelector("span.player-1");
var p2 = document.querySelector("span.player-2");
var reset  = document.querySelector(".reset");
var numInput =  document.querySelector(".limit");
var h3 = document.querySelector("h3 span");

p1Btn.addEventListener("click", function(){
    if(!gameOver){ 
        p1Score = p1Score + 1;
        if(p1Score===winningScore){
            p1.classList.add("winner");
            gameOver = true;
        }
       p1.textContent = p1Score;
        
    }
})
p2Btn.addEventListener("click", function(){
    if(!gameOver){
        p2Score = p2Score + 1;

            if(p2Score===winningScore){
                p2.classList.add("winner");
                gameOver = true;
            }
        p2.textContent = p2Score;
    
    
        }
})
reset.addEventListener("click", function(){
    reseter();
});
function reseter(){
    p1Score = 0;
    p2Score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    gameOver = false;

}
numInput.addEventListener("change",function(){
    reseter();   
    h3.textContent = numInput.value;
    winningScore =Number(numInput.value);
   
})