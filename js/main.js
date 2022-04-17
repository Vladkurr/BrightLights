$(document).ready(function() {
    $('.slider-row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1337,
            settings: {
                slidesToShow: 1,

            }
        }]
    });
});




const
    track_selector = document.querySelector(".track__item"),
    song_name = document.querySelector(".new__name"),
    player = document.querySelector(".player"),
    playBtn = document.querySelector(".play"),
    playImg = document.querySelector(".play__img"),
    audio = document.querySelector(".audio"),
    progress__line = document.querySelector(".progress-line"),
    progress__now = document.querySelector(".progress__now"),
    progress__cont = document.querySelector(".progress-container"),
    progressTime = document.querySelector(".progress-time")

const songs = ["I've Seen Footage", "No Love", "The Fever (Aye Aye)", "Get Got", "Death Grips is Online", "I've Seen Footage"]

let songIndex = 2
    //init
function loadSong(song) {

    audio.src = `./audio/${songs[songIndex]}.mp3`
    progressTime.innerHTML = ``
}

loadSong(songs[songIndex])

// play

function playSong() {
    player.classList.add(".playing")
    playImg.src = "./img/pause.ico"
    audio.play()
    song_name.innerHTML = songs[songIndex]
}

// pause

function pauseSong() {
    player.classList.remove(".playing")
    playImg.src = "./img/play.svg"
    audio.pause()
}
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains(".playing")
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// next song

function nextSong() {
    songIndex++
    loadSong(songs[songIndex])
    playSong()

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
}

// autoplay 
audio.addEventListener("ended", nextSong)


// progress bar

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress__now.style.width = `${progressPercent}%`
}
audio.addEventListener("timeupdate", updateProgress)


// set progress

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    duration = audio.duration
    clickPercent = clickX / width * 100
    audio.currentTime = duration / 100 * clickPercent

}

progress__cont.addEventListener("click", setProgress)
    // ============================== //


audio.volume = 0.04

$(document).ready(function() {
    $(".track__item2").click(function() {
        songIndex2 = this.querySelector(".track__index2").innerHTML - 1
        loadSong2()
        playSong2()

    });
});




/*=========================PLAYER-2====================== */


const
    track_selector2 = document.querySelector(".track__item2"),
    player2 = document.querySelector(".player2"),
    playBtn2 = document.querySelector(".play2"),
    playImg2 = document.querySelector(".play__img2"),
    audio2 = document.querySelector(".audio2"),
    progress__line2 = document.querySelector(".progress-line2"),
    progress__now2 = document.querySelector(".progress__now2"),
    progress__cont2 = document.querySelector(".progress-container2"),
    progressTime2 = document.querySelector(".progress-time2")

const songs2 = ["I've Seen Footage", "No Love", "The Fever (Aye Aye)", "Get Got", "Death Grips is Online", "I've Seen Footage"]

let songIndex2 = 2
    //init
function loadSong2(song) {

    audio2.src = `./audio/${songs2[songIndex2]}.mp3`
    progressTime2.innerHTML = `13:37`
}

loadSong2(songs2[songIndex2])

// play

function playSong2() {
    player2.classList.add(".playing")
    playImg2.src = "./img/pause.ico"
    audio2.play()
}

// pause

function pauseSong2() {
    player2.classList.remove(".playing")
    playImg2.src = "./img/play.svg"
    audio2.pause()
}


playBtn2.addEventListener('click', () => {
    const isPlaying2 = player2.classList.contains(".playing")
    if (isPlaying2) {
        pauseSong2()
    } else {
        playSong2()
    }
})

// next song

function nextSong2() {
    songIndex2++
    loadSong2(songs2[songIndex2])
    playSong2()

    if (songIndex2 > songs2.length - 1) {
        songIndex2 = 0
    }
}

// autoplay 
audio2.addEventListener("ended", nextSong2)


// progress bar

function updateProgress2(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress__now2.style.width = `${progressPercent}%`
}
audio2.addEventListener("timeupdate", updateProgress2)


// set progress

function setProgress2(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    duration = audio.duration
    clickPercent = clickX / width * 100
    audio2.currentTime = duration / 100 * clickPercent

}

progress__cont2.addEventListener("click", setProgress2)
    // ============================== //

audio2.volume = 0.04