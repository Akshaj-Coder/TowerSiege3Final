class Block{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction: 0.1
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    score() {
        if (this.visiblity<0 && this.visiblity >-105) {
            score++;
        }
    }


    display() {
        //console.log(this.body.speed);
    if (this.body.speed < 3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(135,206,234);
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