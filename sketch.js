const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ball
var line1

function preload(){
    pimg = loadImage("polygon.png")
}
function setup(){
   var canvas= createCanvas(800,400)

    engine = Engine.create();
    world=engine.world;

    box1 = new Block(500,360,30,30)
    box2 = new Block(530,360,30,30)
    box3 = new Block(560,360,30,30)
    box4 = new Block(590,360,30,30)
    box5 = new Block(620,360,30,30)
    box6 = new Block(650,360,30,30)

    box7 = new Block(510,330,30,30)
    box8 = new Block(540,330,30,30)
    box9 = new Block(570,330,30,30)
    box10 = new Block(600,330,30,30)
    box11 = new Block(630,330,30,30)

    box12 = new Block(520,310,30,30)
    box13 = new Block(550,310,30,30)
    box14 = new Block(580,310,30,30)
    box15 = new Block(610,310,30,30)

    box16 = new Block(530,280,30,30)
    box17 = new Block(560,280,30,30)
    box18 = new Block(590,280,30,30)

    box19 = new Block(540,250,30,30)
    box20 = new Block(570,250,30,30)

    box21 = new Block(550,220,30,30)

    box22 = new Block(500,135,30,30)
    box23 = new Block(530,135,30,30)
    box24 = new Block(560,135,30,30)
    box25 = new Block(590,135,30,30)
    box26 = new Block(620,135,30,30)
    box27 = new Block(650,135,30,30)

    box28 = new Block(510,105,30,30)
    box29 = new Block(540,105,30,30)
    box30 = new Block(570,105,30,30)
    box31 = new Block(600,105,30,30)
    box32 = new Block(630,105,30,30)    

    box33 = new Block(520,75,30,30)
    box34 = new Block(550,75,30,30)
    box35 = new Block(580,75,30,30)
    box36 = new Block(610,75,30,30)

    box37 = new Block(530,45,30,30)
    box38 = new Block(560,45,30,30)
    box39 = new Block(590,45,30,30)

  //  ball = new Ball(10,10,50)
  ball = Bodies.circle(10,10,50)
  World.add(world,ball)
  line1 = new Line(this.ball,{x:200,y:200})

    ground = new Ground(400,390,800,20)
    ground2 = new Ground(570,160,200,20)
}

function draw(){
    background(0)
    Engine.update(engine);

    image(pimg,ball.position.x,ball.position.y,90,90)

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
   // ball.display();
    line1.display();
    ground.display();
    ground2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    line1.release();
}
