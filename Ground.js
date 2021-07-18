class Ground{
    constructor(x,y,width,height){
      var options = {
        'isStatic': true
    }
    this.body = Bodies.rectangle(x, y,width,height);
    this.height =height;
    this.width =width;
    
    World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      rectMode(CENTER);
     
     rect(400,795, this.width,this.height);
    
    }
  }