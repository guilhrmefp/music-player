import * as playlist from './playlist'

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
      playlist.items.push(data)
      playlist.updatePlaylist()
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