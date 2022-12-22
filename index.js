

// ------- FORMATTING INFO --------- //

//SONG & ALBUM TITLES FORMATTED IN LOWER CASE
//DATES FORMATTED AS DD/MM/YYYY


import {
    data
} from './data.js';

const headerMenu = document.querySelector('#header-menu')
const centerHead = document.querySelector('#center-heading')
const centerContent = document.querySelector('#center-content')


// determines which build function to activate
function loadCenterPanel(link) {
        let section =
        link.id === 'shows'
            ? data.shows
            : link.id === 'songs'
                ? data.songs
                : link.id === 'blog'
                        ? data.blog
                        : data.about

  centerHead.textContent = link.id
  centerContent.append(section.build())
}

centerHead.textContent = centerHead.textContent.toLowerCase()

for (let child of headerMenu.children) { // adds click listener to each header link
    child.addEventListener('click', function name(event) {
        let link = event.composedPath()[0]
        centerContent.replaceChildren('');
        loadCenterPanel(link)
    })
}