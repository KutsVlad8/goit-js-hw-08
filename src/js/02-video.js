import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', onPlay);

function onPlay(data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
}

player.setCurrentTime().then(function () {});
