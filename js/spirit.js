var selfPlane = {
    x : 0,
    y : 0,
    score :0,
    e:null,
    blood:100,
    init:function () {
        this.x = 10;
        Util.selfPlaneElement.setAttribute('width',Util.selfPlaneElement.width/4);
        Util.selfPlaneElement.setAttribute('height',Util.selfPlaneElement.height/4);
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
    up:false,
    down:false,
    left:false,
    right:false,
}