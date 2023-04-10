// Описание проекта:
// Сверстать макет с использованием препроцессоров. Добавить динамику.
// Стиль программирования js: любой
// В репозиторий добавить Readme файл с описанием проекта

const leftSong = document.querySelector(`.img-group-1`);
const runSong = document.querySelector(`.img-play`);
const rightSong = document.querySelector(`.img-group-2`);

const aud = document.querySelector(`audio`);
const name = document.querySelector(`.name`);
const artist = document.querySelector(`.artist`);
const img = document.querySelector(`.img-wrapper`);
const like = document.querySelector(`.img-like-white`);

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
    name.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});
    width: 300px;
    height: 900px;
    background-size: contain;`

    if (flag == false) {
        aud.play();
        flag = true;
        runSong.style = `background-image: url(./assets/play.svg);`
    } else {
        aud.pause();
        flag = false;
        runSong.style = `background-image: url(./assets/stop.svg);`
    }
});

leftSong.addEventListener(`click`, function () {
    if (currenIndexSong == 0) return;
    currenIndexSong--
    aud.src = playList[currenIndexSong].path;
    name.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});
    width: 300px;
    height: 700px;
    background-size: contain;`
    aud.play();
});

rightSong.addEventListener(`click`, function () {
    if (currenIndexSong >= playList.length - 1) return;
    currenIndexSong++
    aud.src = playList[currenIndexSong].path;
    name.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});
    width: 300px;
    height: 900px;
    background-size: contain;`
    aud.play();
});

like.addEventListener(`click`, function () {
    like.style = `background-image: url(./assets/like-black.svg);`  
});




