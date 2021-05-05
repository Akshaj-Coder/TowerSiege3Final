class BlackBlock{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction: 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world,this.body);
    }

    score() {
        if (this.visiblity<0 && this.visiblity >-105) {
            score++;
        }
    }

    display() {
    if (this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        pop();
      }
}
}