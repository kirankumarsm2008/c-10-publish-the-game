var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["980735e9-d68a-46cb-89f0-d1a8013ebc5d","db70a94a-0115-4e51-80fc-23cba4015e61","282892d0-f9e8-4cf1-bf3f-db6c8c11ea14","b81517d4-4e55-4446-abe0-31d34c0c4f77"],"propsByKey":{"980735e9-d68a-46cb-89f0-d1a8013ebc5d":{"name":"germ","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"vdO.aUyxbX7W5t4O9o_BQDEB48.hjZw8","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":52},"rootRelativePath":"assets/980735e9-d68a-46cb-89f0-d1a8013ebc5d.png"},"db70a94a-0115-4e51-80fc-23cba4015e61":{"name":"hand sanitizer.jpg_1","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"6mrX7bBaiVL9ZoKsDrrqRMPz.bgaUmcF","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/db70a94a-0115-4e51-80fc-23cba4015e61.png"},"282892d0-f9e8-4cf1-bf3f-db6c8c11ea14":{"name":"human","sourceUrl":null,"frameSize":{"x":100,"y":227},"frameCount":1,"looping":true,"frameDelay":12,"version":"F.1ZgsSG509M82cFf9OagI5UQOEUZGS8","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":227},"rootRelativePath":"assets/282892d0-f9e8-4cf1-bf3f-db6c8c11ea14.png"},"b81517d4-4e55-4446-abe0-31d34c0c4f77":{"name":"germ1","sourceUrl":null,"frameSize":{"x":50,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"GFa9sylmdeHZ1bGjJoXoY1qlB3xunGsg","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":52},"rootRelativePath":"assets/b81517d4-4e55-4446-abe0-31d34c0c4f77.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// creating viruses
var virus1 = createSprite(25, 75, 50, 50);
virus1.setAnimation("germ")

var virus2 = createSprite(75, 75, 50, 50);
virus2.setAnimation("germ1")

var virus3 = createSprite(125, 75, 50, 50);
virus3.setAnimation("germ")

var virus4 = createSprite(175, 75, 50, 50);
virus4.setAnimation("germ1")

var virus5 = createSprite(225, 75, 50, 50);
virus5.setAnimation("germ")

var virus6 = createSprite(275, 75, 50, 50);
virus6.setAnimation("germ1")

var virus7 = createSprite(325, 75, 50, 50);
virus7.setAnimation("germ")

var virus8 = createSprite(375, 75, 50, 50);
virus8.setAnimation("germ1")

var virus9 = createSprite(25, 125, 50, 50);
virus9.setAnimation("germ1")

var virus10 = createSprite(75, 125, 50, 50);
virus10.setAnimation("germ")

var virus11 = createSprite(125, 125, 50, 50);
virus11.setAnimation("germ1")

var virus12 = createSprite(175, 125, 50, 50);
virus12.setAnimation("germ")

var virus13 = createSprite(225,125, 50, 50);
virus13.setAnimation("germ1")

var virus14 = createSprite(275, 125, 50, 50);
virus14.setAnimation("germ")

var virus15 = createSprite(325, 125, 50, 50);
virus15.setAnimation("germ1")

var virus16 = createSprite(375, 125, 50, 50);
virus16.setAnimation("germ")

//score
var score=0;

//gamestate serve
var gameState = "serve";
//creating human
var human=createSprite(200,390,100,20);
human.setAnimation("human")
 
 //creating sanitizer
var sanitizer=createSprite(200,200,20,20);
sanitizer.setAnimation("hand sanitizer.jpg_1")

function draw() {
  background("pink");
  
   //display score
  textSize(20);
  stroke("red");
  text("Score = "+score,300,20);
  
   //game states
  if(gameState == "serve")
  {
    //display welcome text
    textSize(25);
    text("Welcome! Press Enter to start.",30,270);
  
  //Moving the ball on pressing enter key
  if(keyDown("enter")){
    sanitizer.velocityX = 2;
    sanitizer.velocityY = 3;
    gameState="play"
  } 
  }
  
  if(gameState == "play")
  {
   human.x=World.mouseX 
   if (score == 16 || sanitizer.isTouching(bottomEdge) ) {
    gameState="end"
   }
   
  }
  
  if(gameState == "end")
  {
   textSize(25);
   text("game over !!", 150, 200);
  sanitizer.velocityX=0;
    sanitizer.velocityY=0;
  }
  //giving sounds for the sanitizer when it touches human or virus
   if (sanitizer.isTouching(human)|| sanitizer.isTouching(virus1)){
  playSound("assets/category_bell/notification_4.mp3")  
  }
  
   if (sanitizer.isTouching(virus2)|| sanitizer.isTouching(virus3)){
  playSound("assets/category_bell/hollow_bell_notification.mp3")   
   }
   
   if (sanitizer.isTouching(virus4)|| sanitizer.isTouching(virus5)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   }
   
   if (sanitizer.isTouching(virus6)|| sanitizer.isTouching(virus7)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   }
   
   if (sanitizer.isTouching(virus8)|| sanitizer.isTouching(virus9)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   }
   
   if (sanitizer.isTouching(virus10)|| sanitizer.isTouching(virus11)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   } 
   
   if (sanitizer.isTouching(virus12)|| sanitizer.isTouching(virus13)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   }  
   
   if (sanitizer.isTouching(virus14)|| sanitizer.isTouching(virus15)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   }
   
   if (sanitizer.isTouching(virus16)){
     playSound("assets/category_bell/hollow_bell_notification.mp3")
   }
  createEdgeSprites()
  sanitizer.bounceOff(topEdge);
  sanitizer.bounceOff(rightEdge);
  sanitizer.bounceOff(leftEdge);
  sanitizer.bounceOff(human);
  
  //destroying the viruses
 if ( sanitizer.isTouching(virus1)){
   score= score+1
  virus1.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus2)){
 score= score+1
  virus2.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus3)){
 score= score+1
  virus3.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus4)){
   score= score+1
  virus4.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus5)){
   score= score+1
  virus5.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus6)){
   score= score+1
  virus6.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus7)){
   score= score+1
  virus7.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus8)){
   score= score+1
  virus8.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus9)){
   score= score+1
  virus9.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus10)){
   score= score+1
  virus10.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus11)){
   score= score+1
  virus11.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus12)){
   score= score+1
  virus12.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus13)){
   score= score+1
  virus13.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus14)){
   score= score+1
  virus14.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus15)){
   score= score+1
  virus15.destroy(sanitizer)  
 }
 if ( sanitizer.isTouching(virus16)){
   score= score+1
  virus16.destroy(sanitizer)  
 }
 
    human.x=World.mouseX;
 
 
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};