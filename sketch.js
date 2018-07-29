let movingColor = [];
let size = 100;
let bubble = [];

function setup() {
    // createCanvas(640, 480);
    createCanvas(windowWidth, windowHeight);


    for (let i = 0; i < size; i++) {
        movingColor.push(new MovingColor());
        bubble.push(new BigBubble(width, height, 10));
    }

}

function draw() {
    background(0);
    for (let i = 0; i < movingColor.length; i++) {
        // movingColor[i].show();
        // movingColor[i].flow();
        // movingColor[i].move();
        bubble[i].fadeOut();
        bubble[i].grow();
        bubble[i].show();

    }
}