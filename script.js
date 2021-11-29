status = "";
objects = [];
mentioned_object = "";
function preload(){

}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    mentioned_object = document.getElementById("name_of_object").value;

    document.getElementById("status").innerHTML = "Status: Objects Detecting";
}

function modelLoaded(){
    status = true;
    console.log("cocossd model is loaded, mentioned object: " + mentioned_object);
}

function draw(){
    image(video, 0, 0, 480, 380);
}