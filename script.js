import {Layer} from "/layer.js";
import {loop} from "/loop.js";
import {sand} from "/sand.js";
import {player} from "/player.js";
let sandCount = [];
const Player = new player();//наш любимый игрок
class App{
    constructor(container){
        this.layer = new Layer(container);
        this.button = document.getElementById('btn1')
        this.moneycount = document.getElementById('moneycount')
        this.anglecount=0;
        
        

        this.rect = {
            x: 0,
            y: 0,
            w: 180,
            h: 180,
            dx:500,
            dy:500
        }

        new loop(this.update.bind(this), this.display.bind(this));
    }
    update(correction){
        
        this.layer.context.clearRect(0, 0, this.layer.w, this.layer.h);
        for (let i in sandCount){
            for (let g in sandCount){
                if (sandCount[i].y==sandCount[g].y&&
                    sandCount[i].x==sandCount[g].x&&g!=i){

                    sandCount[i].y=sandCount[i].y-1;
                    sandCount[i].dy=0;
                }else{
                     if(sandCount[i].dy==0){
                         sandCount[i].dy=1;
                    }
                    
                }
            }
            sandCount[i].move();
            this.layer.context.fillStyle=sandCount[i].color;
            this.layer.context.fillRect(sandCount[i].x,sandCount[i].y,sandCount[i].w,sandCount[i].h);
        }
    }

    display(){
        this.moneycount.innerHTML=Player.money+'$';
        //this.layer.context.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
    }
}
//кнопки
btn1.onclick=function(){
    sandCount.push(new sand());
    Player.money+=1;
    if (sandCount.length>100){
        sandCount.shift();
    }
}
onload = () => {
    for (let i = 0; i<10;i++){
        sandCount.push(new sand(i));
    }
    new App(document.querySelector(`body`));//канвас на боди
    // new App(document.querySelector(`#box1`));
    
}