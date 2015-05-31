var num_timezone = 24;
var timezone = [];
var timezone_color = [];
var timezone_num = [];
var myWidth, myHeight;
var smallWidth;
var tempX = 0;
var map;
var white = 255;
var black = 50;
var currentTime = 0;

// button
var modeButton;
var mode;

function preload() {
    map = loadImage('./images/map-2.png');
}

function setup() {
    myWidth = windowWidth - 20;
    myHeight = windowHeight - 20;
    myHeight = map.height*myWidth/map.width;
    smallWidth = (myWidth/24);
    createCanvas(myWidth, myHeight);
    for(var i = 0; i < num_timezone; i++) {
        timezone[i] = parseInt(myWidth/(num_timezone)*i);
        timezone_color[i] = 0;
    }
    timezone[25] = parseInt(myWidth);
    console.log(timezone);
    console.log(test);

    // button
    /*modeButton = createButton('change mode');
    modeButton.position(0, 650);
    modeButton.mousePressed(changeMode);*/
    mode = 0;

    console.log(data);
}

function draw() {
    //fill(0);
    image(map, 0, 0, myWidth, myHeight);
    if(mode == 0) {
        updateTimeZoneColor();
    }
    for(var i = 0; i < num_timezone; i++) {
        fill(timezone_color[i]);
        stroke(255);
        //line(timezone[i], 0, timezone[i], myHeight);
        rect(timezone[i], 0, smallWidth, myHeight);
        //rect(timezone[i], 0, timezone[i+1]-timezone[i], myHeight);
        //text(''+(i), timezone[i]+20, 30);
    }
    //line(0, myHeight-30, myWidth, myHeight-30);
    fill(color(63, 124, 172));
    stroke(255);
    rect(0, myHeight-50, myWidth, 30);
    stroke(0);
    textAlign(CENTER);
    for(var i = 0; i < num_timezone; i++) {
        text(''+(timezone_num[i]), timezone[i]+(smallWidth/2), myHeight-30);
    }

    //fill(0);
    var xx, yy, rr;
    //console.log(data[currentTime]);
    for(var i = 0; i < data[currentTime].length; i++) {
        //console.log(data[currentTime][i].x);
        xx = data[currentTime][i].x * myWidth;
        yy = data[currentTime][i].y * myHeight;
        rr = data[currentTime][i].r / 20;
        if(rr < 5) {
            rr = 5;
        }
        if(data[currentTime][i].c == null) {
            data[currentTime][i].c = color(random(255), random(255), random(255));
        }
        fill(data[currentTime][i].c);
        stroke(data[currentTime][i].c);
        ellipse(xx, yy, rr, rr);
    }
}

function updateTimeZoneColor() {
    tempX = parseInt(mouseX/smallWidth);
    for(var i = 0; i < num_timezone; i++) {
        timezone_color[i] = 0;
    }
    currentTime = tempX;
    //timezone_color[tempX] = 255;
    var currentNum;
    for(var i = 0; i < num_timezone; i++) {
        currentNum = tempX + i;
        if(currentNum > num_timezone-1) {
            currentNum -= num_timezone;
        }
        timezone_color[currentNum] = color(abs(i-12)*(parseInt((white-black)/12))+black, 50);
        timezone_num[currentNum] = i+12;
        if(timezone_num[currentNum]>=num_timezone) {
            timezone_num[currentNum] -= 24;
        }
    }
}

function changeMode() {
    if(mode == 0) {
        mode = 1;
        timezone_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]; 
    }
    else
        mode = 0;
}

function drawPoint() {
    fill(0);
    var xx, yy, rr;
    for(var i = 0; i < test.length; i++) {
        xx = test.x * myWidth;
        yy = test.y * myHeight;
        ellipse(xx, yy, test.r*20, test.r*20);
    }

    //ellipse(x, y, r, r);
}
