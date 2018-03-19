(function() {
  var myElement; // might be declared as local var

  var previewMover = function(f) {
    myElement.style.left = f.offsetX + 15 + 'px';
    myElement.style.top = f.offsetY + 15 + 'px';
  }

  document.querySelector('.grid').addEventListener('contextmenu', function major(e) {
    e.preventDefault(); // prevents default right click function of os
    if (e.target.tagName === 'IMG') {
  // places the img on div
      myElement = document.createElement('div');
      myElement.className = 'preview';
      e.target.parentNode.appendChild(myElement);

      var myImg = document.createElement('img');
      var imgLoc = e.target.src;
      myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';
      previewMover(e) // positions the preview at the start of right click
      myElement.appendChild(myImg);

  // gets rid of image on mouseout and removes 2 events
      e.target.addEventListener('mouseout', function handler() {
        myElement.parentNode.removeChild(myElement);

        e.target.removeEventListener('mousemove', previewMover, false);
        this.removeEventListener('mouseout', handler, false);
        document.querySelector('.grid').addEventListener('contextmenu', major, false);
      }, false);

  // positions the preview when hovering over an img after right click
      e.target.addEventListener('mousemove', previewMover);  

// prevents multiples right clicks on an image
      this.removeEventListener('contextmenu', arguments.callee, false);

    } // check to see that I clicked on IMG only
  }, false); // click event  
})()
