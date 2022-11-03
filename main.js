noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function preload()
{}

function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#F5E2E4");
    fill('#a1cdce');
    stroke('#beb45');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('PoseNet is initialized........:)');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristY="+rightWristY);
    }
}