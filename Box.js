class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'setStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      if(this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.visibility);
  
        pop();
      }

    };
    scored(){
       
      if(this.Visibility<0 && this.Visibility >-105){
        score=score+1;
      }
    }

};
