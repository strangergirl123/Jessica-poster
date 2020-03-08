//Original poster link: https://i.pinimg.com/originals/c2/bc/5d/c2bc5dbc05b5308a28fbcd460ea8614b.jpg

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}


function draw() {
    background('#2267c7');
    translate(width/2, height/2);
    
    //poster background
    fill('white')
    rect(-250, -330, 450, 650);
    //top of cube
    fill('yellow');
    noStroke();
    quad(-30, -280, -250, -180, -30, -80, 200, -180);
    
    //magenta color fill
    fill('#e81577');
    quad( -250, -330, -30, -330,-30, -280, -250, -180,);
    quad(200, -330, -30, -330,-30, -280, 200, -180);

    //stripes
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

    //shading
    fill(10,40);
    quad(-30,-260,-30,-20,200,-120,200,-360);

    //top text
    fill('white');
    textSize(20);
    textStyle(BOLD);
    text('Of Monsters \nand Men', -230, -470);
    text('48_ \n33', 150, -470);

    //bottom left
    fill('black');
    textSize(30);
    textStyle(BOLD);
    text('Beneath \nthe Skin', -230, 30);
    textSize(15);
    text('2014', -230, 95);

    //columns of text
    textSize(9);
    text('Crystals\nHuman\nHunger\nWolves\nEmpire\nWinter Sound\nSlow Life',-50,30);
    text('4:02\n3:58\n4:50\n3:58\n4:22\n3:42\n5:43',25,30);

    text('Organs\nBlack Water\nThousand Eyes\nI of the Storm\nWe Sink\nBackyard',85,30);
    text('4:31\n4:13\n4:02\n4:36\n4:23\n4:19',160,30);
}

function stripes()
{
    quad( -250, -120, -30, -20,-30, -50, -250, -150);
    quad(200, -120, -30, -20,-30, -50, 200, -150); 
}
