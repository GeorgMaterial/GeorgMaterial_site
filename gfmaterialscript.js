const headerMenu = document.querySelector('#header-menu')
const showsLink = document.querySelector('#shows')
const songsLink = document.querySelector('#songs')
const visualsLink = document.querySelector('#visuals')
const newsLink = document.querySelector('#news')
const aboutLink = document.querySelector('#about')
const headerTitle = document.querySelector('#main-title')
const centerHead = document.querySelector('#center-heading')
const centerContent = document.querySelector('#center-content')

const data = {
  shows: {
    content: [
      {
        date: '01.01.1998',
        name: 'generic show name',
        venue: 'string',
        time: '20:00'
      },
      {
        date: 'a date',
        name: 'generic show name',
        venue: 'a generic venue',
        time: '20:00'
      }
    ],
    build: function () {
      let fragment = document.createDocumentFragment()
      for (let item in this.content) {
        let subItem = this.content[item]
        let div = document.createElement('div')
        let nameSect = document.createElement('h3')
        nameSect.className = 'show-name'
        nameSect.textContent = subItem.name
        div.className = 'showDiv'

        div.appendChild(nameSect)

        let info = document.createElement('p')
        info.className = 'show-info'
        info.innerHTML =
          'Date: ' +
          subItem.date +
          ' <br>Time: ' +
          subItem.time +
          ' <br>Venue: ' +
          subItem.venue
        div.appendChild(info)
        fragment.appendChild(div)
      }
      return fragment
    }
  },
  songs: {
    discography: [
      {
        singles: [],
        albums: []
      }
    ],
    content: [
      {
        name: "I hope this feeling doesn't last",
        year: 2019,
        listen: [
          {
            spotify_url:
              'https://open.spotify.com/track/08RWnzMJcEhU3YwX5mrvo0?si=12bb8fef9ef542b0',
            apple_music_url:
              'https://music.apple.com/au/album/i-hope-this-feeling-doesnt-last/1469761003?i=1469761004',
            youtube_url: 'https://www.youtube.com/watch?v=5XqftkdlvRg',
            bandcamp_url:
              'https://georgiamarley.bandcamp.com/track/i-hope-this-feeling-doesnt-last'
          }
        ],
        lyrics:
          "sometimes my fingertips arent good enough <br>\
                    textures feel better when i brush em against my lips<br>\
                    and i prefer my tea in the summer<br>\
                    in air conned rooms where the heat always escapes me<br>\
                    i think i see the world a little differently<br>\
                    train tracks & jet packs are the soundtrack of my dreams<br>\
                    i'm a little too affected by what i see on tv <br>\
                    my friends hang on my wall to remind me <br>\
                    that i <br>\
                    am a subject of humanity<br>\
                    a chapter of reality<br>\
                    and i'm still tryna wrap my head around it <br>\
                    <br>\
                    i've told my friends i dont think i'll make it to 30<br>\
                    i'm not suicidal i just dont think it exists<br>\
                    i have a problem where if i cant imagine it i wont do it<br>\
                    and sorry mum but i cant imagine having kids<br>\
                    oh i think i see things differently <br>\
                    the best thing about that kiss was the look on his face<br>\
                    and the best wine i've ever had was a four dollar bottle of gossips<br>\
                    but i play board games with my friends and they remind me that i<br>\
                    am subject to them loving me<br>\
                    am a chapter in our legacy<br>\
                    and i'm still tryna wrap my head around it <br>\
                    <br>\
                    i dont know why people live <br>\
                    and at this point i'm too scared to ask<br>\
                    too many nights thinking about death<br>\
                    i hope this feeling doesnt last<br>\
                    i dont know why people live <br>\
                    and at this point i'm too scared to ask<br>\
                    too many nights staring at the ceiling <br>\
                    i hope this feeling doesnt last",
        about: 'string'
      },
      {
        name: "i'll believe it",
        year: 2019,
        listen: [
          {
            spotify_url:
              'https://open.spotify.com/track/6WxvrEMECVhYBQ9uQLE4gJ?si=cebf79c212a24fd9',
            apple_music_url:
              'https://music.apple.com/au/album/ill-believe-it/1505991360?i=1505991362',
            youtube_url: 'https://www.youtube.com/watch?v=HwPGo12pAlI',
            bandcamp_url:
              'https://georgiamarley.bandcamp.com/track/ill-believe-it'
          }
        ],
        lyrics:
          "What if we run out of things to say\
                    Cause I've tied my tongue to the back of your face\
                    I guess it wouldn't be too bad to cut it off\
                    Cause if I can't talk to you\
                    I'd rather not talk at all\
                    Why'd you keep calling\
                    In the middle of the day\
                    When all I talk about is how I'm scared of change\
                    Well when you get to the crux of it\
                    I don't get why you say I'm your favourite phone call\
                    \
                    But I'll believe it when I see it\
                    I'll believe it when I see it\
                    \
                    Maybe God is racist to aliens\
                    And we haven't seen any because She hates them\
                    I spend too much time pondering the sky\
                    And you never try to tie me back down\
                    What if we run out of things to do\
                    Maybe one day we'll grow tired of my room\
                    But I tell you\
                    Even when you're against yourself\
                    My hands fit your hands perfectly\
                    \
                    I'll believe it when I see it\
                    I'll believe it when I see it\
                    \
                    Maybe I'm just sitting here waiting for you\
                    To change your mind\
                    Because to be alive is to be awake\
                    And these days darling I am just so tired\
                    Good dreams are the ones that sting\
                    And every year is an abstract thing\
                    And your words seem to light the dim\
                    \
                    I'll believe it when I see it \
                    I'll believe it when I see it\
                    I'll believe it when I see it\
                    I'll believe it when I see it \
                    I'll believe it when I see it\
                    I'll believe it when I see it ",
        about: 'string'
      },
      {
        name: 'glue',
        year: 2020,
        listen: [
          {
            spotify_url:
              'https://open.spotify.com/track/3xde9RhE5MZZ1CPsGK91NJ?si=b64b2ffe92634cd4',
            apple_music_url:
              'https://music.apple.com/au/album/glue/1505991360?i=1505991363',
            youtube_url: 'https://www.youtube.com/watch?v=_w1gmU9B8qg',
            bandcamp_url: 'https://georgiamarley.bandcamp.com/track/glue'
          }
        ],
        lyrics:
          "loneliness comes quick & thick at night\
                    punctures my lungs \
                    and holds me til im sick with it \
                    i just wanna be behind your eyes\
                    be the light\
                    i wanna be what makes your face light up\
                    but you wont even look at me \
                    \
                    -chorus-\
                    oooo but i like you\
                    please dont leave me as number two\
                    i know our moments have been too few\
                    but oooo i like you\
                    please dont leave me as number two\
                    let me wrap up your heart and stick it to mine with glue \
                    \
                    oh i just wish you'd let me kiss you between the eyes\
                    hold my hand feel my love til you're sick with it\
                    someone once told me i'm the first girlfriend type\
                    but let me be your first, last, only lady\
                    let me keep you up at night\
                    \
                    -chorus-\
                    \
                    has anyone told you\
                    you're the prettiest girl in the world\
                    i'm gonna tell you\
                    i want us to be together\
                    \
                    oh i think we are meant to be \
                    like arts & crafts get stuck with me\
                    compare our hands shape i want to see\
                    how our hands fit together\
                    be with me \
                    \
                    -chorus- \
                    \
                    stick it to mine with glue\
                    let me wrap up your heart\
                    & stick it to mine with glue",
        about:
          "I wrote this song in 2019, pulling little bits from other songs I've written over the years. \
                    It's a song about wanting to be good enough, about wanting to be someone's priority."
      }
    ],
    build: function () {
      let fragment = document.createDocumentFragment()
      for (let item in this.content) {
        let subItem = this.content[item]
        let div = document.createElement('div')
        let nameSect = document.createElement('h3')
        nameSect.className = 'song-name'
        nameSect.textContent = subItem.name
        div.className = 'songDiv'
        div.appendChild(nameSect)
        let info = document.createElement('div')
        info.className = 'song-info'
        info.innerHTML =
          '<em>' +
          subItem.year +
          '</em><br>\
                    <ul>\
                        <li><a href="' +
          subItem.listen.spotify_url +
          '">Spotify</a> \
                        <li><a href="' +
          subItem.listen.apple_music_url +
          '">Apple Music</a> \
                        <li><a href="' +
          subItem.listen.youtube_url +
          '">Youtube</a> \
                        <li><a href="' +
          subItem.listen.bandcamp_url +
          '">Bandcamp</a>\
                    </ul>\
                    <p><em>' +
          subItem.about +
          '</em></p>\
                    <p> <strong>lyrics</strong><br><br>\
                    ' +
          subItem.lyrics +
          '</p>'
        div.appendChild(info)
        fragment.appendChild(div)
      }
      return fragment
    }
  },
  visuals: {
    content: [{}],
    build: function () {
      console.log('poop!')
    }
  },
  news: {
    content: [
      {
        post_date: '01.01.1998',
        post_time: '20:00',
        title: 'string',
        content: 'html'
      },
      {
        post_date: '01.01.1998',
        post_time: '20:00',
        title: 'string',
        content: 'html'
      }
    ],
    build: function () {}
  },
  about: {
    content: [
      {
        title: 'string',
        content: 'html'
      }
    ],
    build: function () {}
  }
}

function loadCenterPanel (link) {
  let section =
    link.id === 'shows'
      ? data.shows
      : link.id === 'songs'
      ? data.songs
      : link.id === 'visuals'
      ? data.visuals
      : link.id === 'news'
      ? data.news
      : data.about

  centerHead.textContent = link.id
  centerContent.append(section.build())
}

centerHead.textContent = centerHead.textContent.toLowerCase()

for (let child of headerMenu.children) {
    child.addEventListener('click', function name (event) {
        let link = event.composedPath()[0]
        centerContent.replaceChildren('')
        loadCenterPanel(link)
  })
}