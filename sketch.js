var database;
var PlayerCount;
var GameState = 0;
var player;
var form, game;
var playerInfo;
var playerCar1, playerCar2, playerCar3, playerCar4;
var Cars;
var canvas;
var car1, car2, car3, car4, track;

function preload(){
    car1 = loadImage("images/car1.png");
    car2 = loadImage("images/car2.png");
    car3 = loadImage("images/car3.png");
    car4 = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
}

function setup(){
    canvas = createCanvas(windowWidth - 20, windowHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.CallStart();
}

function draw(){
    background("white");
    if(PlayerCount === 4) {
        game.updateState(1);
    }
    if(GameState === 1) {
        game.Play();
    }
    if(GameState === 2) {
        game.End();
    }
}
