const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles;
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(1905, 910);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var i = 0; i <= width; i = i + 190) {
    divisions.push(new Divisions(i, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 90; j <= width; j = j + 100) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 40; j <= width - 10; j = j + 100) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 90; j <= width; j = j + 100) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 40; j <= width - 10; j = j + 100) {
    plinkos.push(new Plinko(j, 375));
  }
  for (var j = 90; j <= width - 10; j = j + 100) {
    plinkos.push(new Plinko(j, 475));
  }

}

function draw() {
  background("Black");
  textSize(40)
  text("Score : " + score, 40, 40);
  text("100", 1000, 650);
  text("100", 817, 650);
  text("200", 1195, 650);
  text("400", 1380, 650);
  text("1000", 1560, 650);
  text("2000", 1752, 650);
  text("200", 630, 650);
  text("400", 440, 650);
  text("1000", 240, 650);
  text("2000", 60, 650);
  textSize(70);
  text("Get a Score of 5000 to Win, Left Click to Unleash the Plinkos", 5, 250);
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {

      if (particle.body.position.x > 1712) {
        score = score + 2000;
        particle = null;
      }
      else if (particle.body.position.x > 1522 && particle.body.position.x < 1712) {
        score = score += 1000;
        particle = null;
      }
      else if (particle.body.position.x > 1332 && particle.body.position.x < 1522) {
        score = score += 400;
        particle = null;
      }
      else if (particle.body.position.x > 1142 && particle.body.position.x < 1332) {
        score = score += 200;
        particle = null;
      }
      else if (particle.body.position.x > 950 && particle.body.position.x < 1142) {
        score = score += 100;
        particle = null;
      }
      else if (particle.body.position.x > 760 && particle.body.position.x < 950) {
        score = score += 100;
        particle = null;
      }
      else if (particle.body.position.x > 570 && particle.body.position.x < 760) {
        score = score += 200;
        particle = null;
      }
      else if (particle.body.position.x > 380 && particle.body.position.x < 570) {
        score = score += 400;
        particle = null;
      }
      else if (particle.body.position.x > 190 && particle.body.position.x < 380) {
        score = score += 1000;
        particle = null;
      }
      else if (particle.body.position.x < 190) {
        score = score + 2000;
        particle = null;
      }
    }

  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }



if (score > 5000){
  EndText();

  
}
function EndText(){
  fill("RED");
  textSize(100);
  text("!!YOU WIN, Press CTRL+R to Play Again!!",5, 360);
}
}

  function mousePressed() {
  particle = new Particle(random(20, 1900), 20, 20, 20);
  count++;
}  

