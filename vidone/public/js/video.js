window.onload=function(){
    var videoBox=document.querySelector(".video-box");
    var controls=document.querySelector(".controls");
    var video=document.querySelector("video");
    var playBtn=document.querySelector(".playBtn");
    videoBox.onmouseover=function(){
        controls.style.display="flex";
    }
    videoBox.onmouseout=function(){
        controls.style.display="none";
    }
    playBtn.onclick=function(){
        video.play();
        console.log();
        if(video.paused){
            video.play();
            playBtn.style.backgroundImage="(url/img/pause.png)";
        }
        else {
            video.pause();
            playBtn.style.backgroundImage="(url/img/play.png)";
        }
    }
}