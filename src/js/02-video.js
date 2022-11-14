import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);
const savedTime = Number(localStorage.getItem('videoplayer-current-time'));
const startTimeHandler = () => {
  if (savedTime > 568) {
    localStorage.removeItem('videoplayer-current-time');
  } else if (!savedTime) return 0;
  else return savedTime;
};
const onPlay = ({ duration, percent, seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(startTimeHandler());
