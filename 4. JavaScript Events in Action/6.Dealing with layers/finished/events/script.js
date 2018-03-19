// up until this part it is for touch disabled devices
var dragndrop = (function() {
  var myX = ''; // offset positions
  var myY = '';
  var whichArt = '';

  function resetZ() {
    var elements = document.querySelectorAll('img');
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    };
  }

  function moveStart(e) { // triggered in the beginning of drag
    console.log("-----***START***-----")
    console.log(e.screenX + "-> screenX | screenY <-" + e.screenY)
    console.log(e.clientX + "-> clientX | clientY <-" + e.clientY)
    console.log(e.pageX + "-> pageX | pageY <-" + e.pageY)
    console.log(e.offsetX + "-> offsetX | offsetY <-" + e.offsetY)
    console.log(e.layerX + "-> layerX | layerY <-" + e.layerY)
// screenX/screenY (rel 2 user screen), clientX/clientY (rel 2 window), 
// pageX/pageY (rel 2 html), offsetX/offsetY (rel 2 target element)

//since body is not draggable we dont have this code:if(e.target.tagName === "IMG"){..}
    whichArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX; // 2'si de olur
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;    
    resetZ();  // aşağıdakinden önce gelmesi önemli
    whichArt.style.zIndex = 10;
  }

  function moveDragOver(e) { // triggered in-between drag and drop
    e.preventDefault();
  }

  function moveDrop(e) { // triggered when dropping dragged item (e is body)
    console.log("-----***END***-----")
    console.log(e.screenX + "-> screenX | screenY <-" + e.screenY)
    console.log(e.clientX + "-> clientX | clientY <-" + e.clientY)
    console.log(e.pageX + "-> pageX | pageY <-" + e.pageY)
    console.log(e.offsetX + "-> offsetX | offsetY <-" + e.offsetY)
    console.log(e.layerX + "-> layerX | layerY <-" + e.layerY)

    e.preventDefault(); //to prevent images being opened on tabs
    whichArt.style.left = e.pageX - myX + 'px';
    whichArt.style.top = e.pageY - myY + 'px';
  }

  document.querySelector('body').addEventListener('dragstart', moveStart, false);
  document.querySelector('body').addEventListener('dragover', moveDragOver, false);
  document.querySelector('body').addEventListener('drop', moveDrop, false);
})();