/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony export (immutable) */ __webpack_exports__["playlistItem"] = playlistItem;
/* harmony export (immutable) */ __webpack_exports__["generatePlaylist"] = generatePlaylist;
/* harmony export (immutable) */ __webpack_exports__["updatePlaylist"] = updatePlaylist;
let example = [
  {
    title: 'Sleepless (feat. Jezzabell Doran)',
    artist: 'Flume',
    cover: 'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/68/e0/b8/68e0b807-4fcf-acc0-c626-21f1437ca4e8/dj.uvaezjpv.jpg/268x0w.jpg',
    file: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/15/bf/26/mzi.rnycviup.aac.ep.m4a'
  },
  {
    title: 'Holding On',
    artist: 'Flume',
    cover: 'http://www.themusicninja.com/wp-content/uploads/2012/10/flume-holdin-on-e1350027862463.jpg',
    file: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/cd/4c/38/mzi.jbdluqdc.aac.ep.m4a'
  },
  {
    title: 'Drop the Game',
    artist: 'Flume & Chet Faker',
    cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/14/97/20/149720ca-b89d-b903-3465-6b1779363fe2/flume_chetfaker_1600x1600x300dpi.jpg/268x0w.jpg',
    file: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/ee/64/28/ee642843-f8c1-d48d-d36e-846483191918/mzaf_1736423340038780349.plus.aac.ep.m4a'
  }
];

let items = [
  {
    title: 'Say it',
    artist: 'Flume',
    cover: 'https://i.pinimg.com/originals/a0/19/c7/a019c730e3db9d033b20f396291589bf.jpg',
    file: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/09/75/94/097594bf-7849-e891-768a-785757cdc544/mzaf_5860804393666998860.plus.aac.ep.m4a',
    colors: [
      {
        color: {
          "red": 255,
          "green": 239,
          "blue": 245
        }
      },
      {
        color: {
          "red": 255,
          "green": 102,
          "blue": 153
        }
      },
      {
        color: {
          "red": 107,
          "green": 0,
          "blue": 40
        }
      }
    ]
  },
  {
    title: 'Never Be Like You (feat. Kai)',
    artist: 'Flume',
    cover: 'https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/c9/7b/e2/c97be25a-12f1-15f8-b4ca-892f5eea2a0f/dj.tybkocoj.jpg/268x0w.jpg',
    file: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music69/v4/e3/cb/84/e3cb84b6-7498-7741-f221-8e4f4d0ae7a4/mzaf_2971436619062938701.plus.aac.ep.m4a',
    colors: [
      {
        color: {
          "red": 164,
          "green": 95,
          "blue": 109
        }
      },
      {
        color: {
          "red": 113,
          "green": 74,
          "blue": 84
        }
      },
      {
        color: {
          "red": 155,
          "green": 105,
          "blue": 114
        }
      }
    ]
  }
];


function playlistItem (title, artist, cover) {
let template = `<li class="playlist-item">
                 <figure class="playlist-item__cover">
                   <img src="${cover}" alt="${title} - ${artist}">
                 </figure>
                 <div class="playlist-item__body">
                   <h1 class="playlist-item__title">${title}</h1>
                   <h2 class="playlist-item__artist"> ${artist}</h2>
                 </div>
               </li>`

  return template
}
function generatePlaylist () {
  let playlistItems = ''

  for (let item in items) {
    let song = items[item]
    playlistItems += playlistItem(song.title, song.artist, song.cover);
  }

  document.querySelector('.playlist').innerHTML = playlistItems
}
function updatePlaylist () {
  let song = items[items.length - 1]
  let newPlaylistItem = playlistItem(song.title, song.artist, song.cover)

  document.querySelector('.playlist').insertAdjacentHTML('beforeend', newPlaylistItem)
}

generatePlaylist();

// export default playlist

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const formField = document.querySelectorAll('.form__field')

for (let i = 0; i < formField.length; i++) {
  formField[i].addEventListener('focus', function(e) {
    inputFocus(e.target)
  });
  formField[i].addEventListener('blur', function(e) {
    inputBlur(e.target)
  });
}

function inputFocus (input) {
  input.classList.add('fill')
}
function inputBlur (input) {
  if (!input.value) {
    input.classList.remove('fill')
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playlist__ = __webpack_require__(0);


const formTitle = document.querySelector('[name="txtSong"]')
const formArtist = document.querySelector('[name="txtArtist"]')
const fileName = document.querySelector('#file-name')
const fileUpload = document.querySelector('#file-upload')
const form = document.querySelector('#send-song')
const gKey = 'AIzaSyBv2Czipyp3L5wwjGwWPdWTZ24MucVXz_s'

document.querySelector('.new-song__btn').addEventListener('click', function () {
  modalOpen('#new-song')
});
document.querySelector('.modal__close').addEventListener('click', function () {
  modalClose('#new-song')
});
document.querySelector('.modal__backdrop').addEventListener('click', function () {
  document.querySelector('body').classList.remove('modal__open');
  this.classList.remove('show');
});
document.querySelector('.modal__content').addEventListener('click', function (e) {
  e.stopPropagation()
});

function modalOpen (modalId) {
  document.querySelector('body').classList.add('modal__open');
  document.querySelector(modalId).classList.add('show');
}
function modalClose (modalId) {
  document.querySelector('body').classList.remove('modal__open');
  document.querySelector(modalId).classList.remove('show');
}

document.querySelector('.btn--url').addEventListener('click', function () {
  fileName.setAttribute('required', true)
  fileName.removeAttribute('disabled')
  fileUpload.removeAttribute('required')

  fileName.value = ''
  fileUpload.value = ''

  activeFileBtn(this)
})
document.querySelector('.btn--file').addEventListener('click', function () {
  fileUpload.setAttribute('required', true)

  fileName.removeAttribute('required')
  fileName.setAttribute('disabled', true)
  fileName.classList.remove('fill')
  fileName.value = ''

  activeFileBtn(this)
})

fileUpload.addEventListener('change', function () {
  if (this.value) {
    let file = this.files[0]
    fileName.value = file.name
  } else {
    fileName.value = ''
  }
});

function activeFileBtn (btn) {
  let active = document.querySelector('.btn--file.active')

  if (active) {
    active.classList.remove('active')
  }

  btn.classList.add('active')
}
function formReset () {
  form.reset()
  document.querySelector('.btn--file.active').classList.remove('active')
}

form.addEventListener('submit', function(e) {
  e.preventDefault()
  let fileDataUrl = ''

  if (fileUpload.files.length) {
    fileDataUrl = URL.createObjectURL(fileUpload.files[0])
  } else {
    fileDataUrl = document.querySelector('[name="txtUrl"]').value
  }

  let data = {
    title: formTitle.value,
    artist: formArtist.value,
    file: fileDataUrl
  }

  document.querySelector('.btn--success').setAttribute('disabled', true)
  document.querySelector('.btn--success').classList.add('loading')

  getCover(data).then(imgUrl => {
    data.cover = imgUrl

    getColors(imgUrl).then(colors => {
      data.colors = colors
    }).then(() => {
      __WEBPACK_IMPORTED_MODULE_0__playlist__["items"].push(data)
      __WEBPACK_IMPORTED_MODULE_0__playlist__["updatePlaylist"]()
      modalClose('#new-song')
      formReset()

      document.querySelector('.btn--success').removeAttribute('disabled')
      document.querySelector('.btn--success').classList.remove('loading')
    })
    }, error => {
      document.querySelector('.btn--success').removeAttribute('disabled')
      document.querySelector('.btn--success').classList.remove('loading')
      console.log('Error retornar imagem:', error)
  })
});

function getCover (query) {
  let imgUrl = fetch('https://www.googleapis.com/customsearch/v1?q=' + query.artist + ' ' + query.title +'&cx=012379663040297664463%3Az3mt-ksd-_g&num=1&searchType=image&key=' + gKey)
  .then(response => {
    if (response.ok) {
      return response.json()
    }

    throw new Error ('Request failed!')
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    return jsonResponse.items[0].link
  })

  return imgUrl
}

function getColors (imgUrl) {
  let postBody = {
    "requests": [
      {
      "image": {
        "source": {
          "imageUri": imgUrl
        }
      },
      "features": [
          {
           "type": "IMAGE_PROPERTIES"
          }
        ]
      }
    ]
  }

  let colors = fetch('https://vision.googleapis.com/v1/images:annotate?fields=responses%2FimagePropertiesAnnotation&key=' + gKey, {
    method: 'post',
    body: JSON.stringify(postBody)
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    }

    throw new Error ('Request failed!')
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    return jsonResponse.responses[0].imagePropertiesAnnotation.dominantColors.colors
  })

  return colors
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(4);
__webpack_require__(2);
module.exports = __webpack_require__(0);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playlist__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(2);




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
    index = __WEBPACK_IMPORTED_MODULE_0__playlist__["items"].length - 1;
  }

  changeIndex(index, true)
});
nextBtn.addEventListener('click', function() {
  let index = ++nowPlaying
  if (index >= __WEBPACK_IMPORTED_MODULE_0__playlist__["items"].length) {
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

  let newMusic = __WEBPACK_IMPORTED_MODULE_0__playlist__["items"][index]

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

/***/ })
/******/ ]);