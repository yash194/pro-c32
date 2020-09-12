class Paper {
    constructor(x, y, radius) {
      var options = {
          restitution:0,
          friction:1,
          
          isStatic:false,
      }
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius;     
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate (pos.x , pos.y);
      rotate(angle);
      
      fill("white");
      rectMode(CENTER);
      ellipse( 0,0, this.radius,this.radius);
      pop();
   //   ellipse(pos.x, pos.y, this.radius,this.radius);
    }
  }