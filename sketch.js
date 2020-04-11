

var r =createSprite(100,300,100,100 );
var g =createSprite(290,200,100,100) ;
var b=createSprite(80,160,100,100) ;
var w=createSprite(300,100,100,100);




function setup(){

  createCanvas(1200,400);
}

function draw(){
  background( "yellow");
    if(mouseIsOver(r)){
  
  background("red");
  
  }
  
  
    if(mouseIsOver(g)){
  
      background("green");
      
    }
  
  
        if(mouseIsOver(b)){
  
          background("blue");
          
        }
  
  if(mouseIsOver(w)){
  
          background("white");
          
        }
  
  
  
  
  
  } 