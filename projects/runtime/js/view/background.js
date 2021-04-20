var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    var tree;
    var building;
    var buildings = [];
    
    
    /*
     * Create a background view for our game application
     */
        window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
        
        // add objects for display in background
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();
            
            
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield   
            
                
                var circle;
                    for(var i=0;i<100;i++) {
                        circle = draw.circle(1,'white','Purple',6);
                        circle.x = canvasWidth*Math.random();
                        circle.y = groundY*Math.random();
                        background.addChild(circle);
                    }

                 var moon = draw.bitmap('img/moon.png');
                    moon.x = 1200;
                    moon.y = 25;
                    moon.scaleX = .5;
                    moon.scaleY = .5;
                    background.addChild(moon);
                 
                       
            
           // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
                    
                    var building;
                    var buildingColors = ["Black", "Purple", "Black", "Purple", "Purple", "Black", "Black", "Purple", "Black", "Purple", "Purple"]
                    var buildingHeightDifferent = [86, 270, 150, 175, 250, 100, 160, 200, 69, 84, 30]
                    for (var i = 0; i < 5; ++i) {
                        building = draw.rect(170,buildingHeightDifferent[i],buildingColors[i],'White',1);
                        building.x = 170*i;
                        building.y = groundY-buildingHeightDifferent[i];
                        background.addChild(building);
                        buildings.push(building);
                 }
                  
                    
             //TODO 4: Part 1 - Add a tree
                tree = draw.bitmap('img/tree.png');
                tree.x = 175;
                tree.y = groundY - 250;
                background.addChild(tree);
                 
       
        }
        

        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            
            
            // TODO 4: Part 2 - Move the tree!
                // tree.x = tree.x - 3;
                // if(tree.x < -200) {
                //     tree.x = canvasWidth;
                // }
                
                 tree.x = tree.x - 2;

              
                
            // TODO 5: Part 2 - Parallax
                
                
              
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
               building.x = building.x - 1;
               if(building.x < -200) {
                    building.x = canvasWidth;
                }
            }


        }
        /* Make a createjs container*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
