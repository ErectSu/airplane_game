var Util = {
    windowWidth: 1240,
    windowHeight: 720,
    parentElement:null,
    enemyPlaneElement:null,
    g:function(id){
        return document.getElementById(id);
    },

    init: function () {
        this.parentElement=this.g("parent");
        this.selfPlaneElement=this._loadImg("images/self.png");
        this.enemyPlaneElement=this._loadImg("images/boss.gif");
    },

    _loadImg:function(src){
        var e=document.createElement("img");
        e.style.position="absolute";
        e.src=src;
        return e;
    }
}