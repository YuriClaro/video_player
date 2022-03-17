let video = document.getElementById("video")

function retroceder_10(){
    video.currentTime -= 10;
}

function avancar_10(){
    video.currentTime += 10;
}

function play(){
    video.play();
}

function pause(){
    video.pause();
}

