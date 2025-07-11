var audio = document.getElementById('audio');
var time_past = document.getElementById('time-past');
var left_left = document.getElementById('time-left');
var fill = document.getElementById('fill');
var fill_btn = document.getElementById('fill-btn');
var played = false;


function play_and_pouse(){
    if(played){
        audio.pause();
        document.getElementById('play-pouse').src = "image/play button.png";
        played = false;
    }
    else{
        audio.play();
        document.getElementById('play-pouse').src = "image/Stop.png ";
        played = true;
    }
}
function change_format(time){
    var  minute = parseInt(time / 60);
    var secend  = parseInt(time - (minute * 60));
    if(secend > 9) return minute.toString() + ":" + secend.toString();
    else return minute.toString() + ":0" + secend.toString();
}

function next(){
    if(audio.currentTime + 5 > audio.duration){
        audio.currentTime = audio.duration;
    }
    else{
        audio.currentTime += 5;
    }
}
function back(){
    if(audio.currentTime - 5 < 0){
        audio.currentTime = 0;
    }
    else{
        audio.currentTime -= 5;
    }
}

slider("volume","volume");
slider("time-line","time-line",function(){
    audio.pause(),function(){
        if(played) audio.play();
    }
});
audio.addEventListener('timeupdate',function(){
    fill.style.width = (audio.currentTime * 100 / audio.duration) + "%";
    fill_btn.style.left = (audio.currentTime * 100 / audio.duration) + "%";
    time_past.innerText = change_format(audio.currentTime);
    left_left.innerText ="-" + change_format(audio.duration - audio.currentTime);
})