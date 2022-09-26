object.onclick = function(){whenClick};


function whenClick() {
	var count = document.getElementById('counter').innerHTML;
	count ++;
	document.getElementById('counter').innerHTML = count;
}