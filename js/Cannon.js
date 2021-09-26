class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.CannonImage = loadImage("../assets/canon.png");
    this.CannonBaseImage = loadImage("../assets/cannonBase.png");
  }
  display(){
    push();
    imageMode(CENTER);
    image(this.CannonImage,this.x,this.y,this.width,this.height);
    pop();
    image(this.CannonBaseImage,70,20,200,200);
    noFill();
  }
  
}
