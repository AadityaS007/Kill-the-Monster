const Engine = Matter.Engine
const Constraint = Matter.Constraint
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var background, backgroundImage;
//var bgI = "images/GamingBackground.png";

function preload() {
  //preload the images here
  backgroundImage = loadImage("images/GamingBackground.png")
}

function setup() {
  // console.log("efs1")
  createCanvas(1200, 800);

  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground = new Ground(1200, 690, 3000, 10)
  
  box1 = new Box(600, 570, 50, 50)
  box2 = new Box(600, 500, 50, 50)
  box3 = new Box(600, 450, 50, 50)
  box4 = new Box(600, 400, 50, 50)
  box5 = new Box(600, 350, 50, 50)
  box6 = new Box(600, 300, 50, 50)
  box7 = new Box(600, 250, 50, 50)

  box8 = new Box(650, 200, 50, 50)
  box9 = new Box(650, 200, 50, 50)
  box10 = new Box(650, 200, 50, 50)
  box11 = new Box(650, 200, 50, 50)
  box12 = new Box(650, 200, 50, 50)
  box13 = new Box(650, 200, 50, 50)

  box14 = new Box(550, 400, 50, 50)
  box15 = new Box(550, 350, 50, 50)
  box16 = new Box(550, 300, 50, 50)
  box17 = new Box(550, 250, 50, 50)
  box18 = new Box(550, 200, 50, 50)
  box19 = new Box(550, 150, 50, 50)
  box20 = new Box(550, 150, 50, 50)



  hero = new Hero(100, 100, 100, 100)
  slingshot = new Fly(hero.body, { x: 300, y: 150 });
  monster1 = new Monster(800, 650, 500, 500)
  //console.log("efs2")

}

function draw() {

  background(backgroundImage);

  Engine.update(engine);

  drawSprites();
  ground.display();
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
  hero.display();
 // slingshot.display();
  monster1.display();
  //console.log("efd2")


}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY })
}