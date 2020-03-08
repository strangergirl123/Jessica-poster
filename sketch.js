function setup() {
    createCanvas(windowWidth, windowHeight);
    
}


function draw() {
  background('#2267c7');
  translate(width/2, height/2);
  fill('white')
    rect(-250, -330, 450, 650);
    fill('yellow');
    noStroke();
    quad(-30, -280, -250, -180, -30, -80, 200, -180);
    fill('#e81577');
    quad( -250, -330, -30, -330,-30, -280, -250, -180,);
    quad(200, -330, -30, -330,-30, -280, 200, -180);
    fill('orange');
    stripes();
    translate(0,60);
    fill('#e06416')
    stripes();
    translate(0,60);
    fill('#f246a5');
    stripes();
    translate(0,60);
    fill('#d61344');
    stripes();
    fill(10,40);
    quad(-30,-260,-30,-20,200,-120,200,-360);
}

function stripes()
{
    quad( -250, -120, -30, -20,-30, -50, -250, -150);
    quad(200, -120, -30, -20,-30, -50, 200, -150); 
}
