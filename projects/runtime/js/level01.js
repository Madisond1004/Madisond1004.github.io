var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 100, "y": groundY - 120 },
                { "type": "sawblade", "x": 600, "y": groundY - 120},
                { "type": "sawblade", "x": 900, "y": groundY - 30},
                { "type": "sawblade", "x": 900, "y": groundY -150},
                { "type": "enemy", "x": 900, "y": groundY - 500},
                { "type": "enemy", "x": 900, "y": groundY - 250},
                { "type": "enemy", "x": 900, "y": groundY - 250},
                { "type": "reward", "x": 900, "y": groundY - 250},
                { "type": "trap", "x": 900, "y": groundY - 250},
            ]
        };


            /*
        
        for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItemObject = levelData.gameItems[i];
            if (gameItemObject.type === 'sawblade'){
                createSawBlade(gameItemObject.x, gameItemObject.y);
            }else if (gameItemObject.type === 'enemy'){
                createEnemy(gameItemObject.x, gameItemObject.y);
            } else if (gameItemObject.type === 'trap'){
                createTrap(gameItemObject.x, gameItemObject.y);
            }else {
                createReward(gameItemObject.x, gameItemObject.y);
            }
        };
              */         

            
            window.levelData = levelData;
            // set this to true or false depending on if you want to see hitzones
            game.setDebugMode(true);
        
            // TODO 6 and on go here
            // BEGIN EDITING YOUR CODE HERE
            function createSawBlade(x, y){
                var hitZoneSize = 25;
                var damageFromObstacle = 10;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); 
                sawBladeHitZone.x = x;
                sawBladeHitZone.y = y;
                game.addGameItem(sawBladeHitZone);
            
                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;


                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 300;
                obstacleImage.y = 19;
                

                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 600;
                obstacleImage.y = -25;

                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 690;
                obstacleImage.y = 20;

                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 1900;
                obstacleImage.y = -25;

                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 1000;
                obstacleImage.y = -95;

                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 1600;
                obstacleImage.y = 19;

                var obstacleImage = draw.bitmap('img/sawblade.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = 2000;
                obstacleImage.y = 18;
            }

            createSawBlade(300, groundY - 150);

            
            
                function createEnemy(x, y){
                    var enemy = game.createGameItem('enemy',25);
                    var obstacleImage = draw.bitmap('img/enemy.png');
                    enemy.addChild(obstacleImage);
                    enemy.x = x;
                    enemy.y = y;
                    game.addGameItem(enemy);
                    enemy.onPlayerCollision = function(){
                        console.log('The enemy has hit Halle');
                        game.changeIntegrity(-10);
                        enemy.shrink();
                    }
                    enemy.onProjectileCollision = function(){
                        console.log('Halle has hit the enemy');
                        game.increaseScore(100);
                        enemy.shrink();
                    }
                }


            
            function createReward(x,y) {
                var hitZoneSize = 15;
                var damageFromObstacle = 5;
                var rewardHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                rewardHitZone.x = x;
                rewardHitZone.y = y;
                game.addGameItem(rewardHitZone);  
                var obstacleImage = draw.bitmap('img/reward.png')
                rewardHitZone.addChild(obstacleImage);
                obstacleImage.x = -1 * hitZoneSize;
                obstacleImage.y = -1 * hitZoneSize;  
                game.addGameItem(reward);

                reward.onPlayerCollision = function(){
                    console.log('Halle has gathered the reward');
                    game.changeIntegrity(-10);
                    reward.fadeOut();
                }

            }

                function createTrap(x, y){
                    var hitZoneSize = 25;
                    var damageFromObstacle = 15;
                    var trapHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                    trapHitZone.x = x;
                    trapHitZone.y = y;
                    game.addGameItem(trapHitZone);  
                    var obstacleImage = draw.bitmap('img/hole.png')
                    trapHitZone.addChild(obstacleImage);
                    obstacleImage.x = -90;
                    obstacleImage.y = -25;
                    obstacleImage.scaleX = .25;                    
                    obstacleImage.scaleY = .25;

                    var obstacleImage = draw.bitmap('img/hole.png')
                    trapHitZone.addChild(obstacleImage);
                    obstacleImage.x = 900;
                    obstacleImage.y = -25;
                    obstacleImage.scaleX = .25;                    
                    obstacleImage.scaleY = .25;


                }

                createTrap(800, groundY);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
