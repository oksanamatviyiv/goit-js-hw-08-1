import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('play', function () {
console.log('played the video!');
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player
      .setCurrentTime(parseFloat(savedTime))
      .catch(error => console.error(error));
  }
});

const saveCurrentTime = throttle(() => {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
      console.log(`Current time saved: ${seconds}`);
    })
    .catch(error => console.error(error));
}, 1000);

player.on('pause', saveCurrentTime);
