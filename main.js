function preload(){
    song=loadSound("stay.mp3");
}
function draw(){
    image(video,0,0,500,500);
}
function setup(){
    canvas=createCanvas(500,500);
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas.center();
    video.hide();
    var poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getPoses);
}