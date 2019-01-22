document.querySelector('.grid').addEventListener('click', function(e) {
  // console.log(e.target) // changeable
  // console.log(this) // ul w/ .grid class (fixed)
  if (e.target.tagName === 'IMG') {
    var howmany = this.querySelectorAll('li').length;//searches in this grid obj
    if (howmany > 1) {
      var removeTarget = e.target.parentNode; //li
      removeTarget.parentNode.removeChild(removeTarget);
// alt: this.removeChild(removeTarget);      
    } else { // alt1
      
      // puts text and replaces picture
      var newImg = document.createElement('img');
      newImg.id = "lastImg";
      var oldImg = e.target;
      newImg.src = oldImg.src.substr(0, oldImg.src.length-7) + ".jpg";
      newImg.alt = oldImg.alt;
      this.parentNode.querySelector('#art p').textContent = "You've picked: " + newImg.alt;
      this.querySelector('li').replaceChild(newImg, oldImg); //alt2

      this.removeEventListener('click', arguments.callee, false);
    } //howmany times
  } // check to see that I clicked on IMG only
}, false); // click event

// alt2:
// oldImg.parentNode.removeChild(oldImg)
// this.querySelector('li').appendChild(newImg);

// *alt1: shorter version:*
// var img = e.target;
// img.id = "lastImg";
// var oldSrc = img.src;
// this.parentNode.querySelector('#art p').textContent = "You've picked: " + img.alt;
// img.src = oldSrc.substr(0, oldSrc.length-7) + ".jpg";

// NOT alt: innerHTML is not suitable bc its not dynamic:
// this.querySelector('li').innerHTML = '<img src="?" alt="?">'
