function setup(){
    canvas = createCanvas(550, 550)
    canvas.position(560,150)
    
    video = createCapture(VIDEO);
    video.size(550,500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPose)
    }
    
    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }
    
    function draw() {
        background('#fffbeb')
    }
    
    function gotPose(result){
        if(result.length > 0)
        {
          console.log(results);
        }
    }