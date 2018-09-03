var selfPlane = {
    x : 0,
    y : 0,
    score :0,
    e:null,
    blood:100,
    init:function () {
        this.x = 10;
        Util.selfPlaneElement.setAttribute('width',Util.selfPlaneElement.width/3.2);
        Util.selfPlaneElement.setAttribute('height',Util.selfPlaneElement.height/3.2);
        this.y = (Util.windowHeight - Util.selfPlaneElement.height)/2;
        this.e = Util.selfPlaneElement;
        Util.selfPlaneElement.style.left = this.x + "px";
        Util.selfPlaneElement.style.top=this.y+"px";
        Util.parentElement.appendChild(this.e);
    },
    move:function (moveX,moveY) {
        var x = this.x + moveX;
        var y=this.y+moveY;

        if(x<0-this.e.width/2||x>Util.windowWidth-this.e.width/2){
            return ;
        }
        if(y<0-this.e.height/2||y>Util.windowHeight-this.e.height/2){
            return ;
        }
        this.x=x;
        this.y=y;

        this.e.style.left=this.x+"px";
        this.e.style.top=this.y+"px";
    },
    shoot_count:0,
    _shoot:function () {
        if(this.shoot_count == 100){
            this.shoot_count = 0;
        }
        if (this.shoot_count%5 == 0){
        var bullets=bulletFactory.bullets;
        for(var i in bullets){
            var bullet=bullets[i];
            if (bullet.isUsed == false){
                bullet.moveTo(selfPlane.x+19,selfPlane.y+Util.selfPlaneElement.width/2+9);
                bullet.isUsed = true;
                break
            }

        }
        }
        this.shoot_count += 1;
    },
    up:false,
    down:false,
    left:false,
    right:false,
    shoot:false,
}
var normalEnemy = function(x,y,speed){
    this.x=x;
    this.y=y;
    this.e=Util.normalEnemyElement.cloneNode(true);
    this.e.style.left=x;
    this.e.style.top=y;
    this.e.style.display="none";
    Util.parentElement.appendChild(this.e);
    this.e.style.display="block";
    this.speed=speed;
    this.isDied=false;
}

normalEnemy.prototype.move=function(moveX,moveY){
    this.x+=moveX;
    this.y+=moveY;
    this.e.style.left=this.x+"px";
    this.e.style.top=this.y+"px";
}

normalEnemy.prototype.restore=function(){
    this.x=Util.windowWidth;
    this.y=Math.random()*(Util.windowHeight-Util.normalEnemyElement.height);
    var speed=17+Math.random()*42;
    this.e.style.left=this.x+"px";
    this.e.style.top=this.y+"px";
    this.isDied=false;
}

var enemyFactory={
    enemys:[],
    creatNormalEnemy:function(n){
        for(var i=0;i<n;i++){
            //0~1 乘以窗口宽度，得到的就是从0~窗口宽度的一个随机x值
            var x= Util.windowWidth;
            var y=Math.random()*(Util.windowHeight-Util.normalEnemyElement.height);
            var speed=17+Math.random()*21;
            var ep=new normalEnemy(x,y,speed);
            this.enemys.push(ep);
        }
    }
}

var selfBullet=function(x,y,speed){
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.e=Util.selfBulletElement.cloneNode(true);
    this.e.style.left=this.x+"px";
    this.e.style.top=this.y+"px";
    Util.parentElement.appendChild(this.e);
    this.isUsed=false;
}

selfBullet.prototype.move=function(moveX,moveY){
    this.x+=moveX;
    this.y+=moveY;
    this.e.style.left=this.x+"px";
    this.e.style.top=this.y+"px";
}

selfBullet.prototype.moveTo=function(X,Y){
    this.x=X;
    this.y=Y;
    this.e.style.left=this.x+"px";
    this.e.style.top=this.y+"px";
}

var bulletFactory={
    bullets:[],
    creatSelfBulletElement:function(n){
        for(var i=0;i<n;i++){
            var b=new selfBullet(0,-Util.selfBulletElement.height,80);
            this.bullets.push(b);
        }
    }
}