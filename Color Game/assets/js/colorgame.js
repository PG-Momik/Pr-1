var box = document.querySelectorAll(".square");
var i = 0;
var j = 0;
var color = [];
var modeVar = document.querySelectorAll(".difficuilty");
var againMessage = document.querySelector("#again");
var resultMessage = document.querySelector("#result");
var h1 = document.querySelector("h1");
var h1Selector =  document.querySelector("h1 span");
var modeCheck = "hard";
var numBox = 6;
numB = 6;

reset(numB);
winCheck();
var goalColor = color[numGen(numBox)];
h1Selector.textContent = goalColor.toUpperCase();
modeVar[0].addEventListener("click", function(){
    modeCheck = "Easy";
    i=0;
    modeVar[i+1].classList.remove("selected");
    modeVar[i].classList.add("selected");
    reset(numBox = 3);
    for(j=3; j<box.length; j++){
        box[j].classList.add("hide");
    }
    goalColor = color[numGen(numBox)];
})
modeVar[1].addEventListener("click", function(){
    modeCheck = "Hard";
    i=1;
    modeVar[i-1].classList.remove("selected");
    modeVar[i].classList.add("selected");
    reset(numBox = 6);
    for(j=3; j<box.length; j++){
        box[j].classList.remove("hide");
    }
    goalColor = color[numGen(numBox)];
})
winCheck();

function reset(numB){
    resultMessage.textContent = "";
    againMessage.textContent = "New Colors";

    for(i=0;i<numB;i++){

       color[i] = randomColorGen();
       box[i].style.backgroundColor = color[i]; 

    }
    h1.style.backgroundColor = "steelblue"
    i =0;
    j=0;
    goalColor = color[numGen(numBox)];
    
}

function randomColorGen(){
    var r = numGen(256);
    var g = numGen(256);
    var b = numGen(256);
    var randomColor = "rgb("+r+", "+g+", "+b+")";
    return randomColor; 
}

function numGen(range){
    return Math.floor(Math.random() * range);
}

function winCheck(){
    for(i=0; i<numB; i++){
        box[i].style.backgroundColor = color[i];
        box[i].addEventListener("click",function(){
            selectedColor = this.style.backgroundColor;
            if(goalColor===selectedColor){
                for(j=0;j<numB;j++)
                {   
                    againMessage.textContent = "Play Again?";
                    resultMessage.textContent = "Correct!";
                    resultMessage.classList.remove("invis");
                    resultMessage.style.color = "lime";
                    box[j].style.backgroundColor = selectedColor;
                    h1.style.background = goalColor;
                }
            }
            else{
                resultMessage.textContent = "Try Again.";
                resultMessage.style.color = "Red";
                resultMessage.classList.remove("invis");
                this.style.backgroundColor = "#232323";
            }
        })
    }
}

againMessage.addEventListener("click",function(){
    reset(numB);
    winCheck();
})
