

class Rocketman {
  constructor() {
    //size of rocketman
    this.r = 110;
    this.x = 20;
    this.y = height - this.r;
    //velocity
    this.vy = 0;
    //speed
    this.gravity = 2;
  }

  jump() {
    //speed of rocketmans jump
    if (this.y == height - this.r) {
    this.vy = -30;
    }
  }
//collide function
  hits(moonrock) {
      return collideRectRect(this.x, this.y, this.r, this.r, moonrock.x, moonrock.y, moonrock.r, moonrock.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    //so rocketman can come back down and won't float off to space
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(rmImg, this.x, this.y, this.r, this.r);
  }
}
