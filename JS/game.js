class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            GameState = data.val();
        })
    }
    updateState(NumState){
        database.ref("/").update({
            gameState: NumState
        })
    }
    CallStart(){
        if(GameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display(); 
        }
        playerCar1 = createSprite(100, 200, 100, 100);
        playerCar1.addImage("car1", car1);
        playerCar2 = createSprite(100, 200, 100, 100);
        playerCar2.addImage("car2", car2);
        playerCar3 = createSprite(100, 200, 100, 100);
        playerCar3.addImage("car3", car3);
        playerCar4 = createSprite(100, 200, 100, 100);
        playerCar4.addImage("car4", car4);
        Cars = [playerCar1, playerCar2, playerCar3, playerCar4];
    }
    Play() {
        form.Hide();
        image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
        Player.callPlayerInfo();
        var x = 0;
        var y;
        var index = 0;
        for(var i in playerInfo) {
            index += 1;
            x += 200;
            y = displayHeight - playerInfo[i].distance;
            Cars[index-1].x = x;
            Cars[index-1].y = y;
            if(index === player.indexVal){
                Cars[index-1].shapeColor("red");
                //camera.position.x = displayWidth/2;
                //camera.position.y = Cars[index-1].y;
            }
        }
        if(keyIsDown(UP_ARROW)){
            player.distance += 50;
            player.UpdateND();
        }
        if(player.distance >= 3500){
            GameState = 2;
        }
        drawSprites();
    }
    End() {
        console.log("game ended");
    }
}