document.querySelector('.preview').addEventListener('click', function handler(e) {
  var highRes = document.querySelector('.bgImg');
// *önceki listenerın domda yarattığı değişim görülür (if highRes not removed)*

  if(highRes) { // if there is high res image (2nd time)
    highRes.parentNode.parentNode.removeChild(highRes.parentNode);
    this.removeEventListener('click', handler) // this = highRes
//*no need to add and remove thumbnail's event since it remains on dom anyway*
  } else { // thumbnail (1st time)
    var lowRes = e.target.src;
    var myOverlay = document.createElement('div');
    var highRes = document.createElement('img');
    var mySpinner = document.createElement('img');

    myOverlay.className = "overlay";
    myOverlay.style.display = 'block';
    document.body.appendChild(myOverlay);

    highRes.className = 'bgImg';
    highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
    myOverlay.appendChild(highRes);

    mySpinner.className = 'spinner';
    mySpinner.src = 'images/spinner.gif';
    myOverlay.appendChild(mySpinner);

    highRes.addEventListener('load', function() {//fires when img is loaded
      mySpinner.parentNode.removeChild(mySpinner);
      this.addEventListener('click', handler)//4 highRes 2 get its own event
    });
  }
}, false);

/* vers1: basic version (div with overlay class needed on html):
document.querySelector('img.preview').addEventListener('click', function(e) {
  var lowRes = e.target.src;
  var myOverlay = document.querySelector('.overlay');//from html (not created here)
  var highRes = document.createElement('img');
  var mySpinner = document.createElement('img');

  myOverlay.style.display = 'block';
  highRes.className = 'bgImg';
  highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
  myOverlay.appendChild(highRes);

  mySpinner.className = 'spinner';
  mySpinner.src = 'images/spinner.gif';
  myOverlay.appendChild(mySpinner);

  highRes.addEventListener('load', function() {
    mySpinner.parentNode.removeChild(mySpinner);
  });

}, false);
*/

/* 
*vers2: both images (along with their events) are removed from and added to dom:*
document.querySelector('.preview').addEventListener('click', function handler(e) {

  var highRes = document.querySelector('.bgImg');
  var lowRes = document.querySelector('.preview');

  if(highRes) { // if there is high res image
    
    // appending low res img el and its event
    var lowRes = document.createElement('img');
    lowRes.src = "images/taquitosandcheese_tn.jpg";
    lowRes.className = "preview";
    document.body.insertBefore(lowRes, document.body.childNodes[0])
    // alt: document.body.appendChild(lowRes)
    lowRes.addEventListener('click', handler)

    highRes.parentNode.parentNode.removeChild(highRes.parentNode);
    highRes.removeEventListener('click', handler)

  } else if(lowRes) {

    // removing low res img el and its event
    lowRes.parentNode.removeChild(lowRes);
    lowRes.removeEventListener('click', handler);
    
    var lowResSrc = e.target.src;
    var myOverlay = document.createElement('div');
    var highRes = document.createElement('img');
    var mySpinner = document.createElement('img');

    myOverlay.className = "overlay";
    myOverlay.style.display = 'block';
    document.body.appendChild(myOverlay);

    highRes.className = 'bgImg';
    highRes.src = lowResSrc.substr(0, lowResSrc.length-7) + '.jpg';
    myOverlay.appendChild(highRes);

    mySpinner.className = 'spinner';
    mySpinner.src = 'images/spinner.gif';
    myOverlay.appendChild(mySpinner);

    highRes.addEventListener('load', function() {
      mySpinner.parentNode.removeChild(mySpinner);
      highRes.addEventListener('click', handler) //for highRes to have its own event
    });
  }
}, false);
*/