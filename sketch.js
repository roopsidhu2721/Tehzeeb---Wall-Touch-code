var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;
var backgroundImg;
var allPlayers;
var player1, player2,players;
var player1Img, player2Img;
var reward,coin, cImg;
var wallGroup, rewardGroup;
var confidence = 0;
var cb1;
var wall241,wall240,wall239,wall238,wall237,wall236,wall235,wall234,wall233,wall232,wall231,wall230,wall229,wall228,wall227,wall226,wall225,wall224,wall223,wall222,wall221,wall220,wall219,wall218,wall217,wall216,wall215,wall214,wall213,wall212,wall211,wall210,wall209,wall208,wall207,wall206,wall205,wall204,wall203,wall202,wall201,wall200,wall199,wall198,wall197,wall196,wall195,wall194,wall193,wall192,wall191,wall190,wall189,wall188,wall187,wall186,wall185,wall184,wall183,wall182,wall181,wall180,wall179,wall178,wall177,wall176,wall175,wall174,wall173,wall172,wall171,wall170,wall169,wall168,wall167,wall166,wall165,wall164,wall163,wall162,wall161,wall160,wall159,wall158,wall157,wall156,wall155,wall154,wall153,wall152,wall151,wall150,wall149,wall148,wall147,wall146,wall145,wall144,wall143,wall142,wall141,wall140,wall139,wall138,wall137,wall136,wall135,wall134,wall133,wall132,wall131,wall130,wall129,wall128,wall127,wall126,wall125,wall124,wall123,wall122,wall121,wall120,wall119,wall118,wall117,wall116,wall115,wall114,wall113,wall112,wall111,wall110,wall109,wall108,wall107,wall106,wall105,wall104,wall103,wall102,wall101,wall100,wall99,wall98,wall97,wall96,wall95,wall94,wall93,wall92,wall91,wall90,wall89,wall88,wall87,wall86,wall85,wall84,wall83,wall82,wall81,wall80,wall79,wall78,wall77,wall76,wall75,wall74,wall73,wall72,wall71,wall70,wall69,wall68,wall67,wall66,wall65,wall64,wall63,wall62,wall61,wall60,wall59,wall58,wall57,wall56,wall55,wall54,wall53,wall52,wall51,wall50,wall49,wall48,wall47,wall46,wall45,wall44,wall43,wall42,wall41,wall40,wall39,wall38,wall37,wall36,wall35,wall34,wall33,wall32,wall31,wall30,wall29,wall28,wall27,wall26,wall25,wall24,wall23,wall22,wall21,wall20,wall19,wall18,wall17,wall16,wall15,wall14,wall13,wall12,wall11,wall10,wall9,wall8,wall7,wall6,wall5,wall4,wall3,wall2,wall1;

function preload()
{
    player1Img=loadImage("Sun1.png");
    player2Img=loadImage("WingBot.png");
    cImg=loadAnimation("C1.png", "C2.png", "C3.png", "C4.png", "C5.png", "C6.png");
    rewardImg = loadAnimation("Coin1.png","Coin2.png", "Coin3.png", "Coin4.png", "Coin5.png", "Coin6.png", "Coin7.png", "Coin8.png", "Coin9.png", "Coin10.png");
}

function setup()
{
    canvas=createCanvas(displayWidth-100, displayHeight-100);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
    wallGroup = new Group();
    rewardGroup = new Group();

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 1)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}