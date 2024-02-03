console.log("music app");
const playIconElem = document.getElementById("playIconElem");
const audioElem = document.getElementById("audioElem");
const progressBox = document.getElementById("progressBox");

function playPouseHandler(){
    // console.log("heelo playPouseHandler");
    if(playIconElem.classList.contains("fa-pause")){
        audioElem.pause()
        playIconElem.classList.remove("fa-pause");
        playIconElem.classList.add("fa-play");

    }else{
        audioElem.play()
        playIconElem.classList.add("fa-pause");
        playIconElem.classList.remove("fa-play");
    }

}

if(audioElem.play()){
    setInterval(()=>{
        progressBox.value = audioElem.currentTime;
    },500)
}

progressBox.onchange = function(){
    audioElem.play();
    audioElem.currentTime = progressBox.value;
    playIconElem.classList.add("fa-pause");
    playIconElem.classList.remove("fa-play");
}
