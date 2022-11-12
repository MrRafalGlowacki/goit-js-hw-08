import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const onPlay = ({ duration, percent, seconds }) => {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', _.throttle(onPlay, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
const playStart = () => {
  if (!savedTime) return 0;
  return savedTime;
};

player.setCurrentTime(playStart());