document.querySelector('.grid').addEventListener('mouseover', function major(e) {
  if (e.target.tagName === 'IMG') {

    var myElement = document.createElement('div');
    myElement.className = 'preview';
    e.target.parentNode.appendChild(myElement);//appends to list

    var myImg = document.createElement('img');
    var imgLoc = e.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';
    myElement.appendChild(myImg);

    e.target.addEventListener('mouseout', function handler(d) {
//*e.target, d.target ve this kw'ün hepsi bu callback içinde aynı object*
      var myNode = d.target.parentNode.querySelector('div.preview');
// alt: var myNode = d.target.parentNode.childNodes[1]
      myNode.parentNode.removeChild(myNode);//alt:myElement insted of myNode
      this.removeEventListener('mouseout', handler, false);
//alt: e.target.removeEventListener('mouseout', arguments.callee, false);
      document.querySelector('.grid').addEventListener("mouseover", major, false)
    }, false);

    this.removeEventListener("mouseover", arguments.callee, false)
  } // check to see that I clicked on IMG only
}, false); // click event