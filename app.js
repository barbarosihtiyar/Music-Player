const container = document.querySelector(".container");
const image     = document.getElementById("music-image");
const title     = document.querySelector(".music-details.title");
const singer     = document.querySelector(".music-details.singer");
const prev     = document.querySelector("#controls #prev");
const play     = document.querySelector("#controls play");
const next     = document.querySelector("#controls next");

const player = new MusicPlayer(musicList);


window.addEventListener("load",function(){
    let music = player.getMusic();
    displayMusic(music);
    

});

function displayMusic(music){

    this.title = music.getName();
    this.singer = music.singer;
    this.img = music.img;
    this.file = music.file;
}
