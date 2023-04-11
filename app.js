// Описание проекта:
// Сверстать макет с использованием препроцессоров. Добавить динамику.
// Стиль программирования js: любой
// В репозиторий добавить Readme файл с описанием проекта

const leftSong = document.querySelector(`.img-group-1`);
const runSong = document.querySelector(`.img-play`);
const rightSong = document.querySelector(`.img-group-2`);

const aud = document.querySelector(`audio`);
const treak = document.querySelector(`.treak`);
const artist = document.querySelector(`.artist`);
const img = document.querySelector(`.img-wrapper`);
const like = document.querySelector(`.img-like-white`);
const preview = document.querySelector(`.img-preview`);
const time = document.getElementById(`time`);


let flag = false;

const playList = [
    {
        nameSong: `Удача`,
        path: `./music/Удача.mp3`,
        artist: `Denis Klyaver`,
        imgPath: `./img/Denis_Klyaver.jpg`,
    },

    {
        nameSong: `Жить`,
        path: `./music/Жить.mp3`,
        artist: `Oleg Gazmanov`,
        imgPath: `./img/Oleg_Gazmanov.jpg`,
    },

    {
        nameSong: `Сочи`,
        path: `./music/Сочи.mp3`,
        artist: `Trofim`,
        imgPath: `./img/Trofim.jpg`,
    },
]

let currenIndexSong = 0;

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




