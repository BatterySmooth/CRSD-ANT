var SoftwareVersion = '1.0.0';
var ResultsData = [];

var viewStack = new Array();

function pushView(viewID) {
	if (viewStack.length > 0)
		viewStack[viewStack.length - 1].style.visibility = "hidden";
	view = document.getElementById(viewID);
	view.style.visibility = "visible";
	viewStack.push(view);
}

function popView() {
	viewStack.pop().style.visibility = "hidden";
	viewStack[viewStack.length - 1].style.visibility = "visible";
}