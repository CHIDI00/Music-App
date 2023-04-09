const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const musicContainer = document.querySelector('.music-container');
const audio = document.querySelector('#audio');
const title = document.querySelector('#song-title');
const artist = document.querySelector('#artist-name');
const cover = document.querySelector('#cover');

// Load songs
const songs = ['Happier', 'Joha', 'Under-The-Influence']

// Keep track of the songs
let songIndex = 1

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerHTML = song
    audio.src = `songs/${song}.mp3`
    cover.src = `images/${song}.jpeg`
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').remove('fa-play');
    playBtn.querySelector('i.fas').add('fa-pause');

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').remove('fa-pause');
    playBtn.querySelector('i.fas').add('fa-play');

    audio.pause()
}

playBtn.addEventListener('click', function() {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})