function ExportOnLoad() {
  if (sessionStorage.getItem('FirstTrial') == "CRSD-ANT") {
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0, 0, 0)";
    setTimeout(ExportFadeBackground, 500);    
  }
  if (parseInt(sessionStorage.getItem('round')) > 1) {
    document.getElementById("ExportThankYou").style.visibility = "visible"
  } else {
    document.getElementById("NextTaskExpl").style.visibility = "visible"
  }
  DownloadAllData();
}

function ExportFadeBackground() {
  document.getElementsByTagName("body")[0].style.transition = "background-color 3s linear";
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255, 255, 255)";
}