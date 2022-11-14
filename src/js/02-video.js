import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);
const savedTime = Number(localStorage.getItem('videoplayer-current-time'));

const onPlay = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

const removeLocSto = () => {
  if (savedTime > 568) {
    localStorage.removeItem('videoplayer-current-time');
  }
};
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(savedTime);
window.addEventListener('load', removeLocSto);
