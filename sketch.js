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
}

function stripes()
{
    
}
