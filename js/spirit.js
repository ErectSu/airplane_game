var selfPlane = {
    x : 0,
    y : 0,
    score :0,
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
    }


}