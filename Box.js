//const { World } = require("matter-js");

class Box {
    constructor(x,y,height,width){
    var physics = {
isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,physics);
    this.width = width
    this.height = height
    
    World.add(world, this.body);
}
display() {
    var angle = this.body.angle
    var pos = this.body.position
    rectMode(CENTER)
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
}
};