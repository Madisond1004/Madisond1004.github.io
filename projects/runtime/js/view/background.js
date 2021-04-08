tree.x = tree.x + 1;

if(tree.x < -200) {
    tree.x = canvasWidth;
}                                                                                    for(var i=0;i<5;++i) {
    var buildingHeight = 300;
    var building = draw.rect(75,buildingHeight,'LightGray','Black',1);
    building.x = 200*i;
    building.y = groundY-buildingHeight;
    background.addChild(building);
    buildings.push(building);
}                                                                                                                                    