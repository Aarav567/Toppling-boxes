const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;
var Bird1;
var Pig1;
var Log1;
var BG;
var BGsprite;


function preload(){
    BG=loadImage("sprites/bg.png");


}

function setup(){
    var canvas = createCanvas(400,400);
    BGsprite=createSprite(200,200);
    BGsprite.addImage("background", BG);
    engine = Engine.create();
    world = engine.world;
   /* ground1= new  Ground(200,390,400,20);
    Bird1= new Bird(100,100,30,30);
    Pig1= new Pig(340,300,35,35);
    Log1= new Log(310,300,30,30);*/

}

function draw(){
    background("white");
    Engine.update(engine);
    


/*
    ground1.display();
    Bird1.display();
    Pig1.display();
    Log1.display();*/
    drawSprites();
}