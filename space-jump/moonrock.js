class Moonrock {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = height - this.r;
  }

move() {
  //speed of the moon rocks
  this.x -= 11;
}
  show() {
    image(mrImg, this.x, this.y, this.r, this.r);
  }
}
