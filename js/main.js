var Main = {
    init:function () {
        Util.init()
    },
    _totalEnemies:5,
    start:function () {
        enemyFactory.creatNormalEnemy(this._totalEnemies);
        selfPlane.init();
        this._initEvent();
        this._render();
    },

    _render_t:null,
    _render:function(){
        this._render_t=setInterval(function(){

            var enemys=enemyFactory.enemys;
            for(var i in enemys){
                var enemy=enemys[i];
                enemy.move(-enemy.speed,0);
            }

            if (selfPlane.left){
                selfPlane.move(-Main.keyMove,0)
            }
            if (selfPlane.up){
                selfPlane.move(0,-Main.keyMove)
            }
            if (selfPlane.right){
                selfPlane.move(Main.keyMove,0)
            }
            if (selfPlane.down){
                selfPlane.move(0,Main.keyMove)
            }
        },1000/15)
    },

    keyMove:18,
    _initEvent:function () {
        window.onkeydown = function (e) {
            var keynum;
            var left = 37, up = 38, right = 39, down = 40;

            if (window.event) {// IE
                keynum = e.keyCode
            } else if (e.which) {// Netscape/Firefox/Opera
                keynum = e.which
            }


            switch(keynum){
                case left:
                    selfPlane.left = true;
                    break;
                case up:
                    selfPlane.up = true;
                    break;
                case right:
                    selfPlane.right = true;
                    break;
                case down:
                    selfPlane.down = true;
                    break;
                default:
                    break;
            }
        }

        window.onkeyup = function (e) {
            var keynum;
            var left = 37, up = 38, right = 39, down = 40;

            if (window.event) {// IE
                keynum = e.keyCode
            } else if (e.which) {// Netscape/Firefox/Opera
                keynum = e.which
            }


            switch(keynum){
                case left:
                    selfPlane.left = false;
                    break;
                case up:
                    selfPlane.up = false;
                    break;
                case right:
                    selfPlane.right = false;
                    break;
                case down:
                    selfPlane.down = false;
                    break;
                default:
                    break;
            }
        }
    }

}