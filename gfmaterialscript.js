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
      let fragment = document.createDocumentFragment();
      for (let item in this.content) {
        let subItem = this.content[item]
        let div = document.createElement('div');
        let nameSect = document.createElement('h3')
        nameSect.className = 'show-name'
        nameSect.textContent = subItem.name
        div.className = 'showDiv';

        div.appendChild(nameSect);

        let info = document.createElement('p')
        info.className = 'show-info'
        info.innerHTML = ('Date: ' + subItem.date + ' <br>Time: ' + subItem.time + ' <br>Venue: ' + subItem.venue);
        div.appendChild(info);
        fragment.appendChild(div);
      }
      return fragment;
    },
    songs: {
      content: [
        {
          name: "I hope this feeling doesn't last",
          year: 2019,
          listen: [
            {
              spotify_url: 'url',
              apple_music_url: 'url',
              youtube_url: 'url',
              bandcamp_url: 'url'
            }
          ],
          lyrics: 'string',
          about: 'string'
        },
        {
          name: "i'll believe it",
          year: 2019,
          listen: [
            {
              spotify_url: 'url',
              apple_music_url: 'url',
              youtube_url: 'url',
              bandcamp_url: 'url'
            }
          ],
          lyrics: 'string',
          about: 'string'
        }
      ],
      build: function () {
        console.log('nice!')
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
    centerContent.replaceChildren('');
    loadCenterPanel(link)
  })
}
