var Util = {
    windowWidth: 1240,
    windowHeight: 720,
    parentElement:null,
    normalEnemyElement:null,
    selfBulletElement:null,
    g:function(id){
        return document.getElementById(id);
    },

    init: function () {
        this.parentElement=this.g("parent");
        this.selfPlaneElement=this._loadImg("images/self.png");
        this.normalEnemyElement=this._loadImg("images/normalEnemy.gif");
        this.selfBulletElement=this._loadImg("images/self_bullet.png");
    },

    _loadImg:function(src){
        var e=document.createElement("img");
        e.style.position="absolute";
        e.src=src;
        return e;
    }
}