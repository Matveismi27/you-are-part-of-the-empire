export class player{
    constructor(container=0){
        this.maxhp=100;
        this.weight=5;
        this.craft=1;
        this.fight=1;
        this.hp=this.maxhp;
        this.money=0;
        this.production=0;
        this.inventory =[];
        this.equip=[];
    }
}