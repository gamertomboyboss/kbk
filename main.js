img = "";

function setup()
{
    canvas = createCanvas(990,660);
    canvas.center();
}

function preload()
{
    img = loadImage('deluxe-king-3.jpg');
}

function draw()
{
    image(img, 0, 0, 840, 520);
    fill("#FF0000");
    text("lamp", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    text("bed", 105, 35);
    noFill();
    stroke("#FF1050");
    rect(350, 10, 450, 350);
}