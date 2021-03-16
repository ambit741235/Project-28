class Launcher{
    constructor(bodyA,pointB){
         var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            //length:45
            length:1.5
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        if(this.launcher.bodyA){
            push();
            var pos1 = this.launcher.bodyA.position;
            var pos2 = this.pointB;
            strokeWeight(2);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
            pop();
        }
    }
}