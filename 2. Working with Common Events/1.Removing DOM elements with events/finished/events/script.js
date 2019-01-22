document.querySelector('.grid').addEventListener('click', function(e) {
	if (e.target.tagName === 'IMG') {
	  var removeTarget = e.target.parentNode;
	  removeTarget.parentNode.removeChild(removeTarget);
	}
}, false);