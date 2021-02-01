var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;  
var division;
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var gameState;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,780,1200,10);
  div1 = new Ground(700,680,10,200);
  div2 = new Ground(500,680,10,200);
  div3 = new Ground(400,680,10,200);
  div4 = new Ground(300,680,10,200);
  div5 = new Ground(600,680,10,200);
  div6 = new Ground(200,680,10,200);
  div7 = new Ground(100,680,10,200);

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   

   if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
         if(particle.body.position.x<300){
            score = score+500;
            particle=null;
         }
    }
 }    

 ground.display();
 div1.display();
 div2.display();
 div3.display();
 div4.display();
 div5.display();
 div6.display(); 
 div7.display();

 textSize(25);
 fill("white");
 text("Score : "+score,50,30);

 textSize(25);
 fill("white");
 text("500",145,610);

 textSize(25);
 fill("white");
 text("500",50,610);

 textSize(25);
 fill("white");
 text("500",210,610);

 textSize(25);
 fill("white");
 text("100",305,610);

 textSize(25);
 fill("white");
 text("100",400,610);

 textSize(25);
 fill("white");
 text("100",500,610);

 textSize(25);
 fill("white");
 text("200",600,610);

 textSize(25);
 fill("white");
 text("200",700,610);








}

function mousePressed(){
  if(gameState!=="end"){
     particle = new Particle(mouseX,10,10,10);
  }
}