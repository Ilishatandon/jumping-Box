var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
b1=createSprite(0,580,360,30)
b1.shapeColor="purple"
ball=createSprite(0,585,50,50)
    //create 4 different surfaces
    b2=createSprite(295,580,200,30)
    b2.shapeColor="orange"
    b3=createSprite(515,580,200,30)
    b3.shapeColor="green"
    b4=createSprite(740,580,200,30)
    b4.shapeColor="pink"
    ball.velocityX=5
    ball.velocityY=5


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
if (b1.isTouching(ball)&&ball.bounceOff(b1)){
    ball.shapeColor="Purple"
    music.play()
}
if (b2.isTouching(ball)&&ball.bounceOff(b2)){
    ball.shapeColor="orange"
    music.play()
}
if (b3.isTouching(ball)&&ball.bounceOff(b3)){
    ball.shapeColor="green"
    music.play()
}
if (b4.isTouching(ball)){
    ball.shapeColor="Pink"
    music.stop()
    ball.velocityX=0
    ball.velocityY=0
}
drawSprites()
    //add condition to check if box touching surface and make it box
}
