var bg, bgImg
var heli, heliImg
var robber1, robber2, robber3, robber4, robberNorm, robberInj
var go, goImg
var restart, restartImg
var edges

function preload() {
    bgImg = loadImage("Background.jpeg");
    heliImg = loadImage("Heli.png");
    robberNorm = loadImage("RobberNorm.png");
    robberInj = loadImage("RobberInj.png");
    goImg = loadImage("GO.png")
    restartImg = loadImage("Restart.png")
}

function setup() {
    createCanvas(1000,750);
    
    bg = createSprite(165,300,1,1);
    bg.addImage(bgImg);

    heli = createSprite(160,500,1,1);
    heli.addImage(heliImg);
    heli.scale = 0.15;

    robber1 = createSprite(600, 670);
    robber1.addImage(robberNorm);
    robber1.scale = 0.25;
    robber1.setSpeed(random (-5), random (-10) );


    robber2 = createSprite(600, 670);
    robber2.addImage(robberNorm);
    robber2.scale = 0.25;
    robber2.setSpeed(random (-5), random (10) );


    robber3 = createSprite(500, 670);
    robber3.addImage(robberNorm);
    robber3.scale = 0.25;
    robber3.setSpeed(random (5), random (-10) );


    robber4 = createSprite(400, 670);
    robber4.addImage(robberNorm);
    robber4.scale = 0.25;
    robber4.setSpeed(random (5), random (10) );

    edges = createEdgeSprites();



}


function draw() {
    if(keyDown("space")) {
        heli.velocityY = -9 ;
    }
    
    heli.velocityY = heli.velocityY + 2;

    robber1.bounceOff(edges);
    robber2.bounceOff(edges);
    robber3.bounceOff(edges);
    robber4.bounceOff(edges);

    robber1.bounce(robber2);
    robber1.bounce(robber3);
    robber1.bounce(robber4);

    robber2.bounce(robber3);
    robber2.bounce(robber4);

    robber3.bounce(robber4);
    
    drawSprites();
}