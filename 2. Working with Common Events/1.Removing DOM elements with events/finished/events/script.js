document.querySelector('.grid').addEventListener('click', function(e) {
	if (e.target.tagName === 'IMG') {
	  var removeTarget = e.target.parentNode;
	  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
	}
}, false);