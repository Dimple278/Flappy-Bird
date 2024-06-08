const obstaclesArray = [];

class Obstacle{
    constructor(){
        this.topHeight = (Math.random()*canvas.height/3) +20;
        this.bottomHeight = (Math.random()*canvas.height/3) +20;
        this.x = canvas.clientWidth;
        this.width = 20;
        this.color = "hsla(" + hue + ", 100%, 50%, 0.8)";
    }
    draw(){
        context.fillStyle= this.color;
        context.fillRect(this.x,0,this.width,this.topHeight);
        context.fillRect(this.x,canvas.height-this.bottomHeight,this.width,this.bottomHeight);
    }
    update(){
        this.x -= gameSpeed;
        this.draw(); 
    }
}

function handleObstacles(){
    if(frame%150 == 0){
        obstaclesArray.unshift(new Obstacle())
    }
    for(let i = 0;i< obstaclesArray.length;i++){
        obstaclesArray[i].update();
    }
    if(obstaclesArray.length>20){
        obstaclesArray.pop(obstaclesArray[0])
    }
}
