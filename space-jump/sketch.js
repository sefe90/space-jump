//Inspired by: Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q
// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

let rocketman;
let rmImg;
let mrImg;
let bImg;
let moonrock = [];

function preload() {
  rmImg = loadImage('rocketman.png');
  mrImg = loadImage('moonrock.png');
  bImg = loadImage('background.jpg');

}
//To start the game
function mousePressed() {
  moonrock.push(new Moonrock());
}

function setup() {
  createCanvas(1280, 650);
  rocketman = new Rocketman();

}
//spacebar to jump
function keyPressed() {
  if (key == ' ') {
    rocketman.jump();
  }
}

function draw() {
//the amount of moonrocks that appear will be randomized by 0.01
  if (random(1) < 0.01) {
    moonrock.push(new Moonrock());
  }

    background(bImg);
    rocketman.show();
    rocketman.move();
    //move the moonrocks and if the rocketman hits, gameover
  for (let m of moonrock) {
    m.move();
    m.show();
    if (rocketman.hits(m)) {
      console.log('game over');
      noLoop();
    }
  }
}
