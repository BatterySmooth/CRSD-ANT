function InputOnLoad() {
	if(navigator.userAgent.indexOf('Mac') > -1) {
		elements = document.getElementsByTagName('*');
		for(i=0; i<elements.length; i++) {
			if(elements[i].className.indexOf('fullscreenKey') > -1) {
				elements[i].innerHTML = 'Cmd-Shift-F';
			}
		}
	}

	// Check if browser being used is Firefox
	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) {
		document.getElementById("firefox").style.display = "none";
	}

	// Populate form entries from URL and mark as read-only (urlpopulate.js)
	populateFromURL();
}