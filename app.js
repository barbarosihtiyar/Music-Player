const container         = document.querySelector(".container");
const image             = document.getElementById("music-image");
const audio             = document.querySelector("#audio");
const title             = document.querySelector(".title");
const singer            = document.querySelector(".singer");
const prev              = document.querySelector("#prev");
const play              = document.querySelector("#play");
const next              = document.querySelector("#next");
const duration          = document.getElementById("duration");  
const currentTime       = document.getElementById("current-time");
const progressBar       = document.getElementById("progress-bar");
const ul = document.querySelector("ul");


const player = new MusicPlayer(musicList);



window.addEventListener("load",function(){
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    

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

const Musicprev =() =>{
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const Musicnext =() => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}


const pauseMusic =() =>{
    container.classList.remove("playing");
    play.querySelector("i").classList="fa-solid fa-play";
    audio.pause();
}

const playMusic =() =>{
    container.classList.add("playing");
    play.querySelector("i").classList="fa-solid fa-pause";
    audio.play();
}

const calculateTime = (seconds) => {

    const minute = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    const asecond = second < 10 ? `0${second}`:`${second}`;
    const sum = `${minute}:${asecond}`;
    return sum;

}
 
audio.addEventListener("loadedmetadata", () => {
duration.textContent = calculateTime(audio.duration) ;
progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () =>{
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
    });


progressBar.addEventListener("input" , () => {

currentTime.textContent = calculateTime(progressBar.value);
audio.currentTime=progressBar.value; 

});

const displayMusicList = (list) => {
    for(let i=0; i < list.length; i++) {
        let liTag = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${list[i].getName()}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
            </li>
        `;

        ul.insertAdjacentHTML("beforeend", liTag);

        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        });

    }
}
