// Описание проекта:
// Сверстать макет с использованием препроцессоров. Добавить динамику.
// Стиль программирования js: любой
// В репозиторий добавить Readme файл с описанием проекта

const leftSong = document.querySelector(`.img-group-1`);
const runSong = document.querySelector(`.img-play`);
const rightSong = document.querySelector(`.img-group-2`);
const artist = document.querySelector(`.artist`);
const treak = document.querySelector(`.treak`);
const img = document.querySelector(`.img-wrapper`);
const aud = document.querySelector(`audio`);
const progressContainer = document.querySelector(`.progress_container`);
const progress = document.querySelector(`.progress`);
const time = document.getElementById(`time`);
const like = document.querySelector(`.img-like-white`);

const playList = [
    {
        nameSong: `Тебя удача найдет`,
        path: `./music/Удача.mp3`,
        artist: `Denis Klyaver`,
        imgPath: `./img/Denis_Klyaver.jpg`,
    },

    {
        nameSong: `Жить так жить`,
        path: `./music/Жить.mp3`,
        artist: `Oleg Gazmanov`,
        imgPath: `./img/Oleg_Gazmanov.jpg`,
    },

    {
        nameSong: `Город Сочи`,
        path: `./music/Сочи.mp3`,
        artist: `Trofim`,
        imgPath: `./img/Trofim.jpg`,
    },
]

let currenIndexSong = 0;
let flag = false;

runSong.addEventListener(`click`, function () {
    aud.src = playList[currenIndexSong].path;
    treak.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});`

    if (flag == false) {
        aud.play();
        flag = true;
        runSong.style = `background-image: url(./assets/stop.svg);`
    } else {
        aud.pause();
        flag = false;
        runSong.style = `background-image: url(./assets/playBtn.png);`
    }
});

leftSong.addEventListener(`click`, function () {
    if (currenIndexSong == 0) return;
    currenIndexSong--
    aud.src = playList[currenIndexSong].path;
    treak.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});`
    aud.play();
    flag = true;
    runSong.style = `background-image: url(./assets/stop.svg);`
});

rightSong.addEventListener(`click`, function () {
    if (currenIndexSong >= playList.length - 1) return;
    currenIndexSong++
    aud.src = playList[currenIndexSong].path;
    treak.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});`
    aud.play();
    flag = true;
    runSong.style = `background-image: url(./assets/stop.svg);`
});



let heard = false;
like.addEventListener(`click`, function () {
    if (heard == false) {
        like.style = `background-image: url(./assets/like-black.svg);`
        heard = true;
    } else {
        like.style = `background-image: url(./assets/like-white.svg);`
        heard = false;
    }
});

function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
}
aud.addEventListener('timeupdate', updateProgress)

function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = aud.duration;
    aud.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener(`click`, setProgress);

// aud.addEventListener(`ended`, rightSong);

aud.addEventListener(`timeupdate`, (event) => {
    const durationTime = event.target.duration;
    const currentTime = event.target.currentTime;
    const progressPercent = (currentTime / durationTime) * 100;
    progress.style.width = `${progressPercent}%`;

    const begin = aud.currentTime;

    const timeMin = Math.floor(begin / 60);
    const timeSec = Math.floor(begin % 60);

    const min = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
    const sec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;

    time.innerHTML = `${min}:${sec}`;
});