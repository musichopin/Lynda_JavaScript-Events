(function() {

var jukebox = document.querySelector('ul.player');

jukebox.addEventListener('click', function(e) {

  if (e.target.tagName === "LI") {

  var lastSong = e.target.getAttribute('data-src'); // last clicked audio
  var audioPlayer = document.querySelector('#player'); 
  // exists if audio played before and if audio isnt removed from dom when track ended

  if (audioPlayer) {

    if (lastSong===audioPlayer.getAttribute('src')) {
      if (audioPlayer.paused) {// 3. same audio being resumed
        audioPlayer.play();
        e.target.id = 'playing';
      } else if (audioPlayer.played) { // 2. same audio being paused
        audioPlayer.pause();
        e.target.id = 'paused';
      }

    } else {// different audio being played
      audioPlayer.src = lastSong;
      audioPlayer.play();
      if (document.querySelector('#playing')) {//transition from playing state
        document.querySelector('#playing').id='';//clears old playing style on li
      } else if (document.querySelector('#paused')) {//transition from paused state
        document.querySelector('#paused').id='';//clears old paused style on li
      }
      e.target.id = 'playing';
    }

  } else { // 1. first time audio being played
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = lastSong;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

// audio ends by itself
    audioPlayer.addEventListener('ended', function handler() {
      audioPlayer.parentNode.removeChild(audioPlayer);
      this.removeEventListener('ended', handler)
      e.target.id='';
    }, false);
  }

  } // if only li is clicked

}, false); // click event
  
}())
