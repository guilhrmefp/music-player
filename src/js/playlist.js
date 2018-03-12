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

export let items = [
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


export function playlistItem (title, artist, cover) {
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
export function generatePlaylist () {
  let playlistItems = ''

  for (let item in items) {
    let song = items[item]
    playlistItems += playlistItem(song.title, song.artist, song.cover);
  }

  document.querySelector('.playlist').innerHTML = playlistItems
}
export function updatePlaylist () {
  let song = items[items.length - 1]
  let newPlaylistItem = playlistItem(song.title, song.artist, song.cover)

  document.querySelector('.playlist').insertAdjacentHTML('beforeend', newPlaylistItem)
}

generatePlaylist();

// export default playlist