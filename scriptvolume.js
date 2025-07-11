// var check = prompt("Please Enter The Password:");
// if(check === "amirabbas"){
//     console.log(check);
// }
// else{
//     window.location.assign("../project 2/inde.html");
// }
function slider(action,id,mousedown = function(){} , mouseup = function(){}){
    var parrent = document.getElementById(id);
    var fill = parrent.getElementsByClassName('fill')[0];
    var fill_btn = parrent.getElementsByClassName('fill-btn')[0];
    var can_deag = false, value = 0;
    
    function update(){
        var pos_x = window.event.clientX;
        var left = document.getElementById('left-width-' + id).getBoundingClientRect().left;
        var right = document.getElementById('right-width-' + id).getBoundingClientRect().right;
        var width = right - left;

        value = (pos_x - left) / width;
        if(value < 0) value = 0;
        else if(value > 1) value = 1;

        fill.style.width = (value * 100) + "%";
        fill_btn.style.left = (value * 100) + "%";
        if(action == "time-line"){
            audio.currentTime = audio.duration * value;
        }
        else if(action == "volume"){
            audio.volume = value;
            document.getElementById('volume-value').innerText = parseInt(value * 100);
        }
    }
    parrent.addEventListener('mousedown',function(e){
        if(e.button == 0){
            can_deag = true;
            mousedown();
        }
    });
    document.body.addEventListener('mousemove',function(e){
        if(e.button == 0 && can_deag){
            update();
        }
    });
    document.body.addEventListener('mouseup',function(e){
        if(e.button == 0 && can_deag){
            can_deag = false;
            mouseup();
        }
    });
    

    parrent.addEventListener('click',function(e){
        if(e.button == 0){
            update();
        }
    })
}