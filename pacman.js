//3="<div class='brick'></div>"; 
//2="<div class='coin'></div>"; 
//1="<div class='pacman></div>"; 
var world = [
    [3,3,3,3,3,3,3,3,3,3,3,3],
    [3,2,2,2,2,2,2,2,2,2,2,3],
    [3,2,3,3,2,3,3,3,2,2,2,3],
    [3,2,2,2,2,2,2,2,2,2,2,3],
    [3,2,3,3,2,3,2,3,2,2,2,3],
    [3,2,2,3,2,3,2,3,2,2,2,3],
    [3,2,2,3,2,3,2,3,2,2,2,3],
    [3,2,2,3,2,2,2,3,2,2,2,3],
    [3,2,2,2,2,2,2,2,2,2,2,3],
    [3,3,3,3,3,3,3,3,3,3,3,3]
    ];

    var score = 0;

    var pacman = {
        x: 1,
        y: 1
    };

function displayWorld() {
    var output = "";
    // document.getElementById("world").innerHTML = ""; 

    for (var i = 0; i < world.length; i++){
         output +="<div class='row'>";
        for (var  j =0; j < world[i].length; j++){
            if (world[i][j] ==3)
                output +="<div class='brick'></div>";
            else if (world[i][j] ==2)
                output +="<div class ='coin'></div>";
            // else if(world[i][j]==1)
                // output +="<div class ='pacman'></div>";
            else if(world[i][j]== 0)
                output +="<div class='empty'></div>";
             //output = output + world[i][j];
        }
        output += "\n</div>"
        // document.getElementById("world").innerHTML +="<br>";
    }
    // console.log(output);
     document.getElementById("world").innerHTML = output;
}
function displayPacman(){
    document.querySelector('.pacman').style.top = pacman.y*40+"px";
    document.querySelector('.pacman').style.left = pacman.x*40+"px";
    document.querySelector('.pacman').style.right = pacman.x*40+"px";
    document.querySelector('.pacman').style.bottom = pacman.y*40+"px";
}

function displayScore(){
    document.querySelector('.score').innerHTML= score;
}
displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
   
    if (e.keyCode==37 && world[pacman.y][pacman.x -1] != 3){
        // if (world[pacman.y][pacman.x] == 0)
        pacman.x --;
        // world[pacman.y][pacman.x]==1
        // displayWorld();
    }
    else if (e.keyCode ==39 && world[pacman.y][pacman.x +1] != 3){
        pacman.x ++;
        // displayWorld();
    }
    else if (e.keyCode ==38 && world[pacman.y -1][pacman.x] != 3){
        pacman.y --;
        // displayWorld();
    }
    if (e.keyCode ==40 && world[pacman.y +1][pacman.x] != 3){
        pacman.y ++;
        // displayWorld();
    }
  
    //collision  between pacman and coins//
    if(world[pacman.y][pacman.x]== 2) {
        world[pacman.y][pacman.x]= 0;
        score  +=10;
        displayWorld();
        displayScore();
    }
      
    displayPacman();
}
// displayWorld();
// displayScore();


