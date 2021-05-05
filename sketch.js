const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1;
var stand2;

var ground;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;

var ball;

var polygonimg;

var backgroundImage;

var score = 0;

function preload(){
    getBackgroundImg();

    polygonimg = loadImage("polygon.png");

    backgroundImage = loadImage("bg.jpg");
}

function setup() {
    createCanvas(900,400);
    
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    block8 = new PinkBlock(330,235,30,40);
    block9 = new PinkBlock(360,235,30,40);
    block10 = new PinkBlock(390,235,30,40);
    block11 = new PinkBlock(420,235,30,40);
    block12 = new PinkBlock(450,235,30,40);
    block13 = new CyanBlock(420,195,30,40);
    block14 = new CyanBlock(390,195,30,40);
    block15 = new CyanBlock(360,195,30,40);
    block16 = new BlackBlock(390,155,30,40);
    block17 = new Block(750,175,30,40);
    block18 = new Block(720,175,30,40);
    block19 = new Block(690,175,30,40);
    block20 = new Block(660,175,30,40);
    block21 = new Block(630,175,30,40);
    block22 = new CyanBlock(660,135,30,40);
    block23 = new CyanBlock(690,135,30,40);
    block24 = new CyanBlock(720,135,30,40);
    block25 = new PinkBlock(690,95,30,40);






    ball = Bodies.circle(50,200,20);

    World.add(world,ball);
   

    slingShot = new Slingshot(this.ball,{x:100,y:200});
   
}


function draw() {
    //Engine.update(engine);
    background(backgroundImage);

    //ground.display();
    stand1.display();
    stand2.display();
    
   
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();
    block25.display();
    block25.score();

    imageMode(CENTER);
    image(polygonimg ,ball.position.x,ball.position.y,40,40);
   slingShot.display();

   textSize(20);
   noStroke();
   fill(255,255,255);
   text("Press Space to get another chance to play!", 500,350)
   text("SCORE: "+score,710,40);
  
}

function mouseDragged() {
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
if (keyCode == 32) {
    slingShot.attach(ball);
}
}

async function getBackgroundImg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if (hour>=0600 && hour<=1900) {
        bg = "daybackground.jpg";
    }

    else {
        bg = "nightbackground.jpg";
    }

    backgroundImage = loadImage(bg);
}