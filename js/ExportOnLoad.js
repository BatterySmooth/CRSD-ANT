function ExportOnLoad() {
  if (sessionStorage.getItem('FirstTrial') == "CRSD-ANT") {
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0, 0, 0)";
    setTimeout(ExportFadeBackground, 500);    
  }
  if (sessionStorage.getItem('round') == "1") {
    document.getElementById("NextTaskExpl").style.visibility = "visible"
  } else {
    document.getElementById("ExportThankYou").style.visibility = "visible"
  }
  DownloadAllData();
  sessionStorage.clear;
}

function ExportFadeBackground() {
  document.getElementsByTagName("body")[0].style.transition = "background-color 3s linear";
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255, 255, 255)";
}