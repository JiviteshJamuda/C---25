class Rain{
    constructor(x, y, width, height){
        var option = {
            frictionAir : 0.1,
            density : 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    fall(){
        this.body.velocityY = 2;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("cyan");
        noStroke();
        rect(pos.x,pos.y,this.width,this.height);
        this.fall();
    }
}
