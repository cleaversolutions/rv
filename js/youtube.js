var player;
var ytSeconds = 0;

jQuery(document).ready(function ()
    {
    player = new YT.Player('yt-embed', {events: {
      'onStateChange': onPlayerStateChange
      }
      });
    });

function onPlayerStateChange(e)
{
  if (e.data == 1 && ytSeconds > 0) {
    e.target.seekTo(ytSeconds);
    ytSeconds = 0;
  }
}

function seekTo(seconds)
{
  if (player.getPlayerState() == 1) {
    player.seekTo(seconds);
  }
  else {
    ytSeconds = seconds;
    player.playVideo();
  }
}