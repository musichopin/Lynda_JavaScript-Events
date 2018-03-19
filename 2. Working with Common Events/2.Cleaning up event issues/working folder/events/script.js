document.querySelector('.grid').addEventListener('click', function(e) {
  var removeTarget = e.target.parentNode;
  removeTarget.parentNode.removeChild(removeTarget);
}, false);