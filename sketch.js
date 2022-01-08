const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var fort
var explosions=[]
var enemies=[]
var score=0
function preload()
{
  bg_img = loadImage('bg.png');
 
}
function setup() {
  
    createCanvas(windowWidth,windowHeight);
  
    angleMode(DEGREES)
    angle=PI/4
    engine = Engine.create();
    world = engine.world;
    fort=new Fort(100,500,300,250)
   tank=new Tank(400,500,250,250)
     mg=new Maingun(500,480,55,55,angle)
enemy=new Enemy(1100,500,250,250)    
  }
  function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  fort.display()
  tank.display()
  enemy.display()
  textSize(30)
  text("Score:"+score,100,100)
  
  for (var i = 0; i <explosions.length; i++) {
    if (explosions[i] !== undefined) {
explosions[i].display();
    }
  }
  mg.display()
  Engine.update(engine);
  
}
function showExplosions(){
  if(explosion){
    explosion.display()
  }
}
function keyPressed() {
  if (keyCode === 32) {
 

      var explosion = new Explosion(mg.x,mg.y);

     
    
      explosions.push(explosion);
      
    }
  }
  
  function keyReleased() {
    if (keyCode === 32) {
      if (explosions.length) {
       
        explosions[explosions.length - 1].shoot();
      }
    }
  }

  
  
  



 

