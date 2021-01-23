class Dustbin {
    constructor (x, y, width, height){
        var options = { 
            isStatic: true,
            restitution:0,
            friction:1,
            density:0.1
            }
        
        this.dustbinwidth = 200;
        this.dusbinheight = 213;
        this.wallthickness = 20;
        this.x =x;
        this.y=y;
        this.image = loadImage("dustbingreen.png")
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic: true});
        this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dusbinheight/2,this.wallthickness,this.dusbinheight,{isStatic: true});
        this.righttwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dusbinheight/2,this.wallthickness,this.dusbinheight,{isStatic: true});
        World.add(world,this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world, this.righttwallbody);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y-this.dusbinheight/2,this.dustbinwidth+this.dustbinwidth/4,this.dusbinheight);
    }
}
