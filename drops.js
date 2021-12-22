class Drops{
    constructor(x,y){
        var options = {
            friction: 0.1,
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var rainPos = this.rain.position;

        push();
        translate(rainPos.x, rainPos.y);
        rectMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}