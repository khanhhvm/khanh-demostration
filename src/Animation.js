import React from 'react';
import Sketch from 'react-p5';
import Badge from 'react-bootstrap/Badge';
import 'p5/lib/addons/p5.sound';

let img;
let bg;
var song;
var runsound;
var laughsound;
let x=-260;
let y=0;
let ChickenDirection = 3;
let stage = 1;
let timer = 0;
let slider;

// chicken legs
var llegx=185;
var llegy=260;
var rlegx=210;
var rlegy=260;

let xSpeed = 1;
let ySpeed = 1;

// cat eyes
var yeyes = 160;
var eyesmove = 1;

export default Animation => {
  
  const preload = (p5) => {
    //p5.soundFormats('mp3', 'ogg');
    //runsound = p5.loadSound("../sounds/fast-run-113726.mp3");
    //laughsound = p5.loadSound("./sounds/laughter-29686.mp3");
  };

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(800, 400).parent(canvasParentRef);
    p5.textSize(40);
    p5.textAlign(p5.CENTER, p5.CENTER);
    img = p5.loadImage('https://happycoding.io/images/stanley-1.jpg');
    bg = p5.loadImage("https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
	
	// we call "play" function here after the background songs is loaded
    //song = p5.loadSound('./sounds/my-little-garden-of-eden-112845.mp3',p5.loaded);
    //slider = p5.createSlider(0,1,0.5,0.01);
  };

  const draw = (p5) => {
	  
      // create volume
      //song.setVolume(slider.value());
	  
	  // stage 12 is when everything is end
      if(stage < 12 ) cutscreen1(p5);
      else 
        cutscreen2(p5);
    
  };

  const loaded = () => {
    song.play();
  };

  const stop = () => {
    song.stop();
  };

  // movie screen
function cutscreen1(sketch){
  sketch.background(bg);
  drawCat(sketch);

DisplayText(sketch);
  
  // move Chicken
  sketch.translate(x, y);
  drawChiken(sketch);
  x = x+ChickenDirection;
if(x > 200 && stage === 1) 
  {
    ChickenDirection= 0;
    stage = 2;
    timer = sketch.millis();
  }
  // Chicken run away after conversation
  else if(stage === 10){
    ChickenDirection = -9;
  }
}

// end screen
function cutscreen2(p5){
  p5.background(220);
  p5.fill('red');
  p5.text('Always caution will save your life!!', 400, 200);
}

// I use timer to count down the time text will disappear as well as new screen.
function DisplayText(p5){
// create cutscreen for the text
if(stage === 1)
  {
    p5.fill('black');
    p5.text('Little Red Chick Hood', 300, 330);
  }
else if(stage === 2){
  p5.fill('#b30000');
  p5.text('Hi Grandmother! How are you?', 300, 330);
    if((timer+3000) < p5.millis())
      {
        stage = 3;
        timer = p5.millis();
      }
}
else if(stage === 3){
  p5.fill('purple');
  p5.text('I am fine, dear~', 400, 330);
    if((timer+3000) < p5.millis())
      {
        stage = 4;
        timer = p5.millis();
      }
}
else if(stage === 4){
  p5.fill('#b30000');
  p5.text('What cute ears you have.', 300, 330);
    if((timer+3000) < p5.millis())
      {
        stage = 5;
        timer = p5.millis();
      }
}
else if(stage === 5){
  p5.fill('purple');
  p5.text('The better to hear you with', 300, 330);
  p5.text('my child~', 300, 365);
    if((timer+3000) < p5.millis())
      {
        stage = 6;
        timer = p5.millis();
      }
}
else if(stage === 6){
  p5.fill('#b30000');
  p5.text('But, grandmother', 400, 330);
  p5.text('what glitter eyes you have.', 400, 365);
    if((timer+3000) < p5.millis())
      {
        stage = 7;
        timer = p5.millis();
      }
}
else if(stage === 7){
  p5.fill('purple');
  p5.text('The better to see you with', 300, 330);
  p5.text('my dear~', 400, 365);
    if((timer+3000) < p5.millis())
      {
        stage = 8;
        timer = p5.millis();
      }
}
else if(stage === 8){
  p5.fill('#b30000');
  p5.text('But, grandmother', 400, 330);
  p5.text('what fluffy hands you have.', 400, 365);
    if((timer+3000) < p5.millis())
      {
        stage = 9;
        timer = p5.millis();
      }
}
else if(stage === 9){
  p5.fill('purple');
  p5.text('The better to hug you with~', 300, 330);
    if((timer+3000) < p5.millis())
      {
        stage = 10;
        timer = p5.millis();
        //runsound.play();
      }
}
else if(stage === 10){
  p5.fill('#b30000');
  p5.text('Oh, but, grandmother ', 400, 330);
  p5.text('nature is calling me, bye!!!', 400, 365);
    if((timer+3000) < p5.millis())
      {
        stage = 11;
        timer = p5.millis();
        //song.stop();
        //laughsound.play();
      }
}
else if(stage === 11){
  p5.fill('purple');
  p5.text('The better...oh wait. ', 400, 330);
  p5.text('It is NOT in the script!!!', 400, 365);
    if((timer+3000) < p5.millis())
      {
        stage = 12;
        timer = p5.millis();
      }
}
}

function drawChiken(p5) {

  //----- chicken
// body
p5.fill(204, 102, 0);
p5.ellipse(200,200,80,80);

// mouth
p5.fill(204, 102, 0);
p5.triangle(245,148,245,173, 260,160);

  // basket
  p5.fill(204, 153, 0);
  p5.arc(200, 200, 50, 50, 0, 3.14);

  p5.arc(200, 200, 30, 30, 3.14,0);
  p5.fill(204, 102, 0);
  p5.arc(200, 200, 20, 20, 3.14,0);

  p5.line(185,218,200, 200);
  p5.line(200,225, 220, 200);
  p5.line(210,222,185, 200);
  p5.line(220,215, 200, 200);
  p5.line(176,205, 200, 225);
// head
p5.fill(204, 153, 0);
p5.ellipse(230,160,40,40);

// eyes
p5.fill('black');
p5.ellipse(240,155,8,8);

  // red hood
  p5.fill('red');
  p5.triangle(210,128,205,160, 240,140);

// leg
p5.line(185,238,llegx,llegy);
p5.line(210,238,rlegx,rlegy);
  
  // move leg
  if(stage === 1 || stage >= 10)
    {
      llegx=llegx+xSpeed;
      rlegx=rlegx-xSpeed;
      if(llegx > 200 || llegx < 170) xSpeed = xSpeed * -1;
    }

};

function drawCat( p5) {

//----- bed
p5.fill('white');
  p5.rect(600, 120, 150, 200);
p5.rect(600, 320, 20, 40);
  p5.rect(730, 320, 20, 40);
  p5.arc(675, 120, 150, 150, 3.14, 0);
  p5.arc(675, 120, 120, 120, 3.14, 0);

  // pillow
  p5.rect(625, 130, 100, 55, 20);

  //----- cat
  p5.image(img, 637, 130, img.width / 4, img.height / 4);
  // body
  p5.line(680,205,680,260);
  p5.line(680,210,650,230);
  p5.line(680,210,710,230);
  p5.line(680,260,650,290);
  p5.line(680,260,710,290);

  // eyes surprise
  if(stage == 11)
    {
        yeyes = yeyes + eyesmove; 
        if(yeyes > 163 || yeyes < 157) eyesmove = eyesmove * -1;
        p5.ellipse(655,yeyes,30,30);
        p5.ellipse(690,yeyes,30,30);
        p5.fill('black');
        p5.ellipse(645,yeyes,5,5);
        p5.ellipse(680,yeyes,5,5);
    }
};

  return (
    <>
      <h5>Little Red Chick Hood</h5>
      <Sketch setup={setup} draw={draw} preload={preload} />
      <div><Badge bg="info">Background image: https://images.pexels.com</Badge></div>
      <Badge bg="info">Cat image: https://happycoding.io</Badge>
    </>
  );
};