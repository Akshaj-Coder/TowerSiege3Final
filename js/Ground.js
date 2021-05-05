class Ground{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.position;


        noStroke();
        rectMode(CENTER);
        fill(188,67,67);
        rect(0,0,this.width,this.height);
    }
}   