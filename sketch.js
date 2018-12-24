var circularDeque;
var randomRange = 9;
var nodeNumber = Math.floor(Math.random() * randomRange) + 1;
var canvasWidth = 600;
var canvasHeight = 600;
var bigRadius = Math.min(canvasWidth, canvasHeight) / 4;
var lastPress = "";

function pushBack() {
    circularDeque.pushBack(nodeNumber);
    nodeNumber = Math.floor(Math.random() * randomRange) + 1;
    lastPress = "pushBack";
}

function popBack() {
    circularDeque.popBack();
    lastPress = "popBack";
}

function pushFront() {
    circularDeque.pushFront(nodeNumber);
    nodeNumber = Math.floor(Math.random() * randomRange) + 1;
    lastPress = "pushFront";
}

function popFront() {
    circularDeque.popFront();
    lastPress = "popFront";
}

function setup() {
    circularDeque = new CircularDeque();
    createCanvas(canvasWidth, canvasHeight);

    let pushBackButton = createButton("Push Back");
    let popBackButton = createButton("Pop Back");
    let pushFrontButton = createButton("Push Front");
    let popFrontButton = createButton("Pop Front");
    
    pushBackButton.position(10, canvasHeight - 120);
    popBackButton.position(10, canvasHeight - 90);
    pushFrontButton.position(10, canvasHeight - 60);
    popFrontButton.position(10, canvasHeight - 30);

    pushBackButton.mousePressed(pushBack);
    popBackButton.mousePressed(popBack);
    pushFrontButton.mousePressed(pushFront);
    popFrontButton.mousePressed(popFront);
}

function draw() {
    background(20);


    noStroke();
    fill(173, 204, 255);
    ellipse(canvasWidth - 75, canvasHeight - 75, 50);
    
    stroke(0);
    fill(0, 0, 0);

    textSize(12);
    let txt = "" + (nodeNumber);
    text(txt, canvasWidth - 78, canvasHeight - 72);
    
    drawDeque(canvasWidth / 2, canvasHeight * 0.4, circularDeque);
}

function drawDeque(centerWidth, centerHeight, cd) {

    noStroke();
    fill(255, 0, 0);
    ellipse(canvasWidth / 2, canvasHeight * 0.4, 10);
    
    stroke(255);
    noFill();
    ellipse(centerWidth, centerHeight, 2 * bigRadius);

    let it = circularDeque.getIterator();
    
    noStroke();
    fill(255, 186, 220);
    ellipse(centerWidth, centerHeight - bigRadius, 50);

    let txt = "null";

    stroke(0);
    fill(0, 0, 0);
    text(txt, centerWidth - 10, centerHeight + 3 - bigRadius);
    
    let startTheta = -1 * Math.PI / 2
    let deltaTheta = 2 * Math.PI / (circularDeque.numElements() + 1);
    
    for (let i = 1; i <= circularDeque.numElements(); i++) {
        
        let x = centerWidth + (bigRadius * cos(startTheta + (i * deltaTheta)));
        let y = centerHeight + (bigRadius * sin(startTheta + (i * deltaTheta)));

        fill(195, 247, 192);
        noStroke();
        ellipse(x, y, 50);

        let txt = "" + it.nextElement();
        
        fill(0, 0, 0);
        stroke(0);
        text(txt, x - 3, y + 3);
    }
}
