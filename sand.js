
export class sand{
    constructor(container=1){
        this.h = 2;
        this.w = 2;
        this.x = Math.round(5+Math.random()*20);
        this.y = Math.round(5+Math.random()*20);
        this.dx=0;
        this.dy=1;
        this.color='orange';
    }
    move(){
        
        if (this.y>50&&this.dy>0){
            this.dy*=0;
        }
        this.dx*=0.99;
        this.x+=this.dx;
        this.y+=this.dy;
    }
}