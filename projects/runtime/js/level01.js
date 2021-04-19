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
                { "type": "sawblade", "x": 100, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                { "type": "enemy", "x": 900, "y": groundY },
                { "type": "enemy", "x": 900, "y": groundY },
                { "type": "enemy", "x": 900, "y": groundY },
            ]
        };

        
        for(var i = 0; i < levelData.gameItems.length; i++){
           var obj = levelData.gameItems[i];
           var objX = obj.x;
           var objY = obj.y;
           var objType =  obj.type;

            if(objType==="sawblade"){
              createSawblade(objX, objY);
            } else if (objType ==="enemy"){
                createEnemy(objX, objY);
            }else{
                createReward(objX, objY);
            }
            



        }

        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        
        game.setDebugMode(true);
        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = 400;
        enemy.y = groundY-50; 
          
        game.addGameItem(enemy);


        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createObsticle(){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); 
        sawBladeHitZone.x = -400;
        sawBladeHitZone.y = -200;
        game.addGameItem(sawBladeHitZone);
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
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
