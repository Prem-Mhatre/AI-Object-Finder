status = "";
objects = [];
object_name = "";
function preload(){

}

function setup(){
    canvas = createCanvas(680, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    object_name = document.getElementById("name_of_object").value;

    document.getElementById("status").innerHTML = "Status: Objects Detecting";
}

function modelLoaded(){
    status = true;
    console.log("cocossd model is loaded, mentioned object: " + object_name);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(video, 0, 0, 680, 380);
    if(status){
        object_detector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            if(object_name == objects[i].label){
                document.getElementById("object_status").innerHTML = object_name + " found";
            }

            fill("red");
            text(objects[i].label + " " + floor(objects[i].confidence) + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,  objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
