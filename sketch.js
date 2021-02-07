
function setup() {
  createCanvas(700,700);
  edges=createEdgeSprites();

player=createSprite(60,500,20,20);
target=createSprite(650,60,50,30);
 ob1=createSprite(360,120,70,30);
 ob11=createSprite(450,120,70,30);
 ob12=createSprite(550,120,70,30);
 ob13=createSprite(650,120,70,30);
 ob14=createSprite(250,120,70,30);
 ob15=createSprite(150,120,70,30);
 ob16=createSprite(50,120,70,30);
 ob17=createSprite(230,120,70,30);
 ob11.shapeColor="brown";
 ob12.shapeColor="brown";
 ob13.shapeColor="brown";
 ob14.shapeColor="brown";
 ob15.shapeColor="brown";
 ob16.shapeColor="brown";
 ob17.shapeColor="brown";
 
 


 ob2=createSprite(350,320,70,30);
 ob3=createSprite(200,320,70,30);
 ob4=createSprite(430,320,70,30);
 ob5=createSprite(500,320,100,30);
 ob6=createSprite(650,320,70,30);
 ob7=createSprite(700,320,70,30);
 ob8=createSprite(250,320,70,30);
 ob9=createSprite(100,320,70,30);


 target.shapeColor="orange";
 player.shapeColor="white"
 ob1.shapeColor="brown";
 ob2.shapeColor="brown";
 ob11.shapeColor="brown";
 ob5.shapeColor="brown";
 ob3.shapeColor="brown";
 ob4.shapeColor="brown";
 ob6.shapeColor="brown";
 ob7.shapeColor="brown";
 ob8.shapeColor="brown";
 ob9.shapeColor="brown";


 ob1.velocityX=-5;
 ob11.velocityX=-5;
 ob12.velocityX=-5;
 ob13.velocityX=-5;
 ob14.velocityX=-5;
 ob15.velocityX=-5;
 ob16.velocityX=-5;
 ob17.velocityX=-5;

 ob2.velocityX=5;
 ob3.velocityX=5;
 ob4.velocityX=5;
 ob5.velocityX=5;
 ob6.velocityX=5;
 ob7.velocityX=5;
 ob8.velocityX=5;
 ob9.velocityX=5;
}

function draw() {
  background("green");  
  drawSprites();

  ob1.bounceOff(edges[1]);
ob1.bounceOff(edges[0]);
ob11.bounceOff(edges[1]);
ob11.bounceOff(edges[0]);
ob12.bounceOff(edges[1]);
ob12.bounceOff(edges[0]);
ob13.bounceOff(edges[1]);
ob13.bounceOff(edges[0]);
ob14.bounceOff(edges[1]);
ob14.bounceOff(edges[0]);
ob15.bounceOff(edges[1]);
ob15.bounceOff(edges[0]);
ob16.bounceOff(edges[1]);
ob16.bounceOff(edges[0]);
ob17.bounceOff(edges[1]);
ob17.bounceOff(edges[0]);

ob2.bounceOff(edges[1]);
ob2.bounceOff(edges[0]);
ob3.bounceOff(edges[1]);
ob3.bounceOff(edges[0]);
ob4.bounceOff(edges[1]);
ob4.bounceOff(edges[0]);
ob5.bounceOff(edges[1]);
ob5.bounceOff(edges[0]);
ob6.bounceOff(edges[1]);
ob6.bounceOff(edges[0]);
ob7.bounceOff(edges[1]);
ob7.bounceOff(edges[0]);
ob8.bounceOff(edges[1]);
ob8.bounceOff(edges[0]);
ob9.bounceOff(edges[1]);
ob9.bounceOff(edges[0]);


if(keyDown("up"))
player.y-=5
if(keyDown("down"))
player.y+=5
if(keyDown("left"))
player.x-=5
if(keyDown("right"))
player.x+=5
}


  if(player.isTouching(target))
  text("YOU WIN!!",200,200);

  if(player.isTouching(ob1)){
    text("YOU WIN!!",200,200);
    //player.x=60;
    //player.y=50
  }
  if(player.isTouching(ob11)){
    player.x=60;
    player.y=500
  }
  if(player.isTouching(ob12)){
    player.x=50;
    player.y=500
  }
  if(player.isTouching(ob13)){
    player.x=60;
    player.y=500
  }
  if(player.isTouching(ob14)){
    player.x=60;
    player.y=500
  }
  if(player.isTouching(ob15)){
    player.x=60;
    player.y=500
  
  if(player.isTouching(ob16)){
      player.x=60;
      player.y=500
    }
  if(player.isTouching(ob17)){
      player.x=60;
      player.y=500
    }
  if(player.isTouching(ob2)){
      player.x=60;
      player.y=500
    }
    if(player.isTouching(ob3)){
      player.x=60;
      player.y=500
    }
    if(player.isTouching(ob4)){
      player.x=60;
      player.y=500
    }
    if(player.isTouching(ob5)){
      player.x=60;
      player.y=500
    }
    if(player.isTouching(ob6)){
      player.x=60;
      player.y=500
    }
    if(player.isTouching(ob7)){
      player.x=60;
      player.y=500
  }
    if(player.isTouching(ob8)){
      player.x=60;
      player.y=500
    }
    if(player.isTouching(ob9)){
      player.x=60;
      player.y=500
    }
    

}
