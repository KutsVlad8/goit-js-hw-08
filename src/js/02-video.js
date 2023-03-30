import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

setCurrentTime();

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

function setCurrentTime() {
  if (localStorage.getItem(CURRENT_TIME)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
  }
  return;
}
