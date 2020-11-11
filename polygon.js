class Stone{
    constructor(x,y,height,width)
    {
        var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:0.2,   
        }
    
        this.body =Bodies.rectangle(x,y,height,width,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;

        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y, this.width, this.height);
        pop();
      }
    };
    