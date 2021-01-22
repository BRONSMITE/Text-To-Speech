//const { Bodies } = require("matter-js")

class Ball {
    constructor(x,y,width,height){
    var physics2 = {
        'restitution' :0.8,
        'friction' :1,
        'density' :1
    }
    this.body = Bodies.rectangle(x,y,width,height,physics2);
    this.width = this.width
    this.height = this.height
    World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    //imageMode(CENTER);
    rect( 0, 0, this.width, this.height);
    pop();
    }
}