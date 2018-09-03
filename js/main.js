var Main = {
    init:function () {
        Util.init()
    },
    _totalEnemies:8,
    start:function () {
        enemyFactory.creatNormalEnemy(this._totalEnemies);
        selfPlane.init();
        bulletFactory.creatSelfBulletElement(100);
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

                if(enemy.x<-Util.normalEnemyElement.width||enemy.isDied){
                    enemy.restore();
                }
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
            if(selfPlane.shoot){
                selfPlane._shoot()
            }


            var bullets=bulletFactory.bullets;
            for(var i in bullets){
                var bullet=bullets[i];
                if (bullet.isUsed == true){
                    bullet.move(bullet.speed,0);

                    for(var i in enemys){
                        var enemy=enemys[i];
                        if(bullet.y>10
                            &&bullet.x>enemy.x
                            &&bullet.y>enemy.y
                            &&bullet.y<enemy.y+enemy.e.width
                            &&bullet.x<enemy.x+enemy.e.height){
                            enemy.isDied=true;
                            bullet.isUsed =false;
                            bullet.moveTo(-10,-10)
                        }
                    }
                }
            }

        },1000/15)
    },

    keyMove:18,
    _initEvent:function () {
        window.onkeydown = function (e) {
            var keynum;
            var left = 37, up = 38, right = 39, down = 40, shoot = 65;

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
                case shoot:
                    selfPlane.shoot = true;
                    break;
                default:
                    break;
            }
        }



        window.onkeyup = function (e) {
            var keynum;
            var left = 37, up = 38, right = 39, down = 40, shoot = 65;

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
                case shoot:
                    selfPlane.shoot = false;
                    selfPlane.shoot_count = 0;
                    break;
                default:
                    break;
            }
        }
    }

}