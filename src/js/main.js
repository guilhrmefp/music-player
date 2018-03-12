import * as playlist from './playlist'
import form from './form'
import modal from './modal'

const errorMsg = document.querySelector('.error');
const music = document.querySelector('audio');
const progressBar = document.querySelector('.player__progress');
const rangeBar = document.querySelector('.player__range');
const prevBtn = document.querySelector('.player__btn--prev');
const playBtn = document.querySelector('.player__btn--play');
const nextBtn = document.querySelector('.player__btn--next');
const muteBtn = document.querySelector('.player__volume-icon');
const playlistBtn = document.querySelector('.player__toggle-playlist');
let nowPlaying = 0;

music.addEventListener('timeupdate', function () {
  progressBar.value = Math.floor(this.currentTime)
})
music.addEventListener('durationchange', function () {
  progressBar.setAttribute('max', this.duration)
  rangeBar.setAttribute('max', this.duration)
})
music.addEventListener('ended', function () {
  pauseState();
})
music.addEventListener('playing', function () {
  console.log('playing')
})

rangeBar.addEventListener('change', function () {
  music.currentTime = this.value
})

playBtn.addEventListener('click', function() {
  let state = parseInt(this.getAttribute('data-value'))

  if (state) {
    music.pause();
    pauseState();
  } else {
    music.play().then(() => {
      playState();
      errorMsg.classList.add('hide')
    }).catch((error) => {
      errorMsg.classList.remove('hide')
      console.log(error)
    })
  }
});

prevBtn.addEventListener('click', function() {
  let index =  --nowPlaying
  if (index < 0) {
    index = playlist.items.length - 1;
  }

  changeIndex(index, true)
});
nextBtn.addEventListener('click', function() {
  let index = ++nowPlaying
  if (index >= playlist.items.length) {
    index = 0;
  }

  changeIndex(index, true)
});

muteBtn.addEventListener('click', function() {
  let state = parseInt(this.getAttribute('data-muted'))

  if (state) {
    this.classList.remove('icon-mute')
    this.classList.add('icon-sound')
    this.setAttribute('data-muted', 0)
    music.muted = false
  } else {
    this.classList.remove('icon-sound')
    this.classList.add('icon-mute')
    this.setAttribute('data-muted', 1)
    music.muted = true
  }
});

playlistBtn.addEventListener('click', function() {
  let playlist = document.querySelector('.playlist');
  this.classList.toggle('active')
  playlist.classList.toggle('open')
});

function playState () {
  restartCSSAnimation()
  document.querySelector('.player').classList.add('playing')
  playBtn.setAttribute('data-value', 1)
}
function pauseState () {
  restartCSSAnimation()
  document.querySelector('.player').classList.remove('playing')
  playBtn.setAttribute('data-value', 0)
}
function restartCSSAnimation () {
  playBtn.classList.remove('animate');
  void playBtn.offsetWidth;
  playBtn.classList.add('animate');
}

document.querySelector('.playlist').addEventListener('click', function (e) {
  let target = e.target

  if (target.className === 'playlist-item') {
    let items = document.querySelectorAll('.playlist-item')
    let itemsArray = Array.prototype.slice.call(items)
    let index = itemsArray.indexOf(target)

    changeIndex(index, true)
  }
});

function changeMusic (index) {
  nowPlaying = index

  let player = {
    title: document.querySelector('.player__title'),
    artist: document.querySelector('.player__artist'),
    cover: document.querySelector('.player__cover img'),
    file: document.querySelector('audio'),
    colors: {
      bg: document.documentElement.style,
      progress: document.documentElement.style,
      shadow: document.documentElement.style
    }
  }

  let newMusic = playlist.items[index]

  player.title.innerText = newMusic.title
  player.title.setAttribute('title', newMusic.title)
  player.artist.innerText = newMusic.artist
  player.cover.src = newMusic.cover
  player.file.src = newMusic.file

  player.colors.bg.setProperty('--bg-color', `rgb(${[newMusic.colors[0].color.red, newMusic.colors[0].color.green, newMusic.colors[0].color.blue]})`)
  player.colors.progress.setProperty('--progress-color', `rgb(${[newMusic.colors[1].color.red, newMusic.colors[1].color.green, newMusic.colors[1].color.blue]})`)
  player.colors.shadow.setProperty('--player-shadow', `rgba(${[newMusic.colors[2].color.red, newMusic.colors[2].color.green, newMusic.colors[2].color.blue]}, 0.5)`)
}

function changeIndex (index, play = false) {
  let items = document.querySelectorAll('.playlist-item')

  let getActive = document.querySelector('.playlist-item.active')

  if (getActive) {
    getActive.classList.remove('active')
    getActive.querySelector('.song-waves').remove()
  }

  items[index].classList.add('active')
  items[index].insertAdjacentHTML('beforeend', '<span class="song-waves"><i></i></span>')

  changeMusic(index)

  if (play) {
    music.play()
    playState()
  }
}

changeIndex(0)