const trackName = document.querySelectorAll('.track')
const title = document.getElementById('title');
const readMoreBtn = document.getElementById('read-more');
const expand = document.getElementById('more');
const slider = document.querySelector('.pics');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const audio = document.querySelector('.audio');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
})

document.querySelectorAll('.p-1').forEach(el => el.addEventListener('click', ()=>{
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}))

const images = ['./Tokio Hotel/album/1.jpg','./Tokio Hotel/album/2.jpg', './Tokio Hotel/album/3.jpg', './Tokio Hotel/album/4.jpg', './Tokio Hotel/album/5.jpg'];
let id = 0;

const songs = [
  {
    name: 'Another Lover',
    song: './Tokio Hotel/songs/Another Lover.mp3'
  },
  {
    name: 'Runaway',
    song: './Tokio Hotel/songs/Runaway.mp3'
  },
  {
    name: 'Dreamer',
    song: './Tokio Hotel/songs/Dreamer.mp3'
  },
  {
    name: 'Smells Like Summer',
    song: './Tokio Hotel/songs/Smells Like Summer.mp3'
  },
  {
    name: `Ain't Happy`,
    song: `./Tokio Hotel/songs/Ain't Happy.mp3`
  }
]

trackName[0].addEventListener('click', ()=>{
  title.textContent = songs[1].name
  audio.src = songs[1].song;
}) 

trackName[1].addEventListener('click', ()=>{
  title.textContent = songs[2].name
  audio.src = songs[2].song;
})

trackName[2].addEventListener('click', ()=>{
  title.textContent = songs[3].name
  audio.src = songs[3].song;
})

trackName[3].addEventListener('click', ()=>{
  title.textContent = songs[4].name
  audio.src = songs[4].song;
})

readMoreBtn.addEventListener('click', ()=>{
  if(expand.style.display === 'block') {
    expand.style.display = 'none';
    readMoreBtn.innerText = 'SHOW MORE'
  } else {
    expand.style.display = 'block';
    readMoreBtn.innerText = 'SHOW LESS'
  } 
})

function slide(id) {
  slider.children[0].src = images[id];
}

leftArrow.addEventListener('click', ()=>{
  id--;
  if(id < 0) {
    id = images.length-1;
  }
  slide(id);
})

rightArrow.addEventListener('click', ()=>{
  id++;
  if(id > images.length-1) {
    id = 0;
  }
  slide(id);
})