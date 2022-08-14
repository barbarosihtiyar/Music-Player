const container = document.querySelector(".container");
const image     = document.getElementById("music-image");
const audio     = document.querySelector("#audio");
const title     = document.querySelector(".title");
const singer    = document.querySelector(".singer");
const prev      = document.querySelector("#prev");
const play      = document.querySelector("#play");
const next      = document.querySelector("#next");

const player = new MusicPlayer(musicList);



window.addEventListener("load",function(){
    let music = player.getMusic();
    displayMusic(music);
    

});

function displayMusic(music){

    title.innerText  = music.getName();
    image.src        = "img/" + music.img;
    audio.src        = "mp3/" + music.file;
}

play.addEventListener("click",function(){

    isMusicPlayer =  container.classList.contains("playing");
    
    isMusicPlayer ? pauseMusic() : playMusic();

});

prev.addEventListener("click",function(){

    Musicprev();

});

next.addEventListener("click",function(){

    Musicnext();

});

function Musicprev(){
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

function Musicnext(){
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}


function pauseMusic(){
    container.classList.remove("playing");
    play.classList="fa-solid fa-play";
    audio.pause();
}

function playMusic(){
    container.classList.add("playing");
    play.classList="fa-solid fa-pause";
    audio.play();
}
