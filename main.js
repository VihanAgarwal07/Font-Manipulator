var difference=0;
function setup(){
    console.log("i am in function setup")
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,500)
canvas.center();

poseNet=ml5.poseNet(video,modelLoaded);
		poseNet.on("pose",gotPoses)
}
function modelLoaded(){
console.log("Model is Loaded");
}
function gotPoses(results){
    if(results.length>0){
        RightWristX=results[0].pose.rightWrist.x;
        LeftWristX=results[0].pose.leftWrist.x;
        difference = floor(LeftWristX-RightWristX);
        console.log(difference);
        document.getElementById("textSize").innerHTML="Text Size = " + difference;
    }
}

function draw(){
background("#6c91c2");
textSize(difference)
fill("#ffe787");
text("Peter",50,400);

}

