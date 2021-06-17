class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
      isStatic: true
    };
//add circle to the body
//loadImage
    World.add(world, this.body);
  }

  //add shoot function 

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//call the image function
    pop();

    }
  }

