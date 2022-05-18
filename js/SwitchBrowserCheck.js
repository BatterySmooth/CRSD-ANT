function BrowserCheck() {
  // Check if browser being used is Firefox
  var isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) {
    document.getElementById("firefox").style.display = "none";
  }
}