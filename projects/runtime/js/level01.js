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
                { "type": "enemy", "x": 2000, "y": groundY - 80},
                { "type": "enemy", "x": 3500, "y": groundY - 80},
                { "type": "enemy", "x": 1200, "y": groundY - 80},
                { "type": "enemy", "x": 1100, "y": groundY - 80},
                { "type": "enemy", "x": 2800, "y": groundY - 80},
                { "type": "enemy", "x": 3090, "y": groundY - 80},
                { "type": "enemy", "x": 4190, "y": groundY - 80},
                { "type": "enemy", "x": 3190, "y": groundY - 80},
                { "type": "sawblade", "x": 2800, "y": groundY - 120},
                { "type": "sawblade", "x": 3080, "y": groundY - 120},
                { "type": "sawblade", "x": 1000, "y": groundY - 10},
                { "type": "sawblade", "x": 2010, "y": groundY - 150},
                { "type": "sawblade", "x": 3800, "y": groundY - 10},
                { "type": "sawblade", "x": 3200, "y": groundY - 150},
                { "type": "sawblade", "x": 1700, "y": groundY - 10},
                { "type": "sawblade", "x": 2200, "y": groundY - 10},
                { "type": "sawblade", "x": 3091, "y": groundY - 10},
                { "type": "sawblade", "x": 2700, "y": groundY - 10},
                { "type": "sawblade", "x": 3300, "y": groundY - 10},
                { "type": "sawblade", "x": 2300, "y": groundY - 100},
                { "type": "sawblade", "x": 1390, "y": groundY - 100},
                { "type": "sawblade", "x": 1400, "y": groundY - 100},
                { "type": "reward", "x": 3400, "y": groundY - 90},  
                { "type": "reward", "x": 1500, "y": groundY - 90},
                { "type": "reward", "x": 2610, "y": groundY - 90}, 
                { "type": "reward", "x": 3090, "y": groundY - 90},
                { "type": "reward", "x": 3000, "y": groundY - 90},
                { "type": "trap", "x": 9900, "y": groundY -30},
                { "type": "trap", "x": 1000, "y": groundY - 30},
                { "type": "trap", "x": 700, "y": groundY - 30},   
            ]
        };


            
        
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
            }


            
            
                function createEnemy(x, y){
                     var hitZoneSize = 50;
                    var damageFromObstacle = 0;
                    var enemy = game.createObstacle(hitZoneSize, damageFromObstacle);
                    enemy.x = x;
                    enemy.y = y;
                    game.addGameItem(enemy);  
                    
                    var obstacleImage = draw.bitmap('img/enemy.png')
                    enemy.addChild(obstacleImage);
                    obstacleImage.x = -25;
                    obstacleImage.y = -80;
                    game.addGameItem(enemy);
                          
                    enemy.velocityX = - 1;
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
                var reward = game.createObstacle(hitZoneSize, damageFromObstacle);
                reward.x = x;
                reward.y = y;
                game.addGameItem(reward);  
                
                var obstacleImage = draw.bitmap('img/Reward.png')
                reward.addChild(obstacleImage);
                obstacleImage.x = -25;
                obstacleImage.y = -25;
                obstacleImage.scaleX = .4;
                obstacleImage.scaleY = .4;  
                game.addGameItem(reward);

                reward.onPlayerCollision = function(){
                    console.log('Halle has gathered the Reward');
                    game.changeIntegrity(+10);
                    reward.fadeOut();
                }

            }

                function createTrap(x, y){
                    var hitZoneSize = 15;
                    var damageFromObstacle = 15;
                    var trapHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                    trapHitZone.x = x;
                    trapHitZone.y = y;
                    game.addGameItem(trapHitZone);  
                    var obstacleImage = draw.bitmap('img/hole.png')
                    trapHitZone.addChild(obstacleImage);
                    obstacleImage.x = -130;
                    obstacleImage.y = -25;
                    obstacleImage.scaleX = .4;
                    obstacleImage.scaleY = .4;  
                }


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
