function ExportOnLoad() {
  if (sessionStorage.getItem('FirstTrial') == "CRSD-ANT") {
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0, 0, 0)";
    setTimeout(ExportFadeBackground, 500);    
  }
  DownloadAllData();
}

function ExportFadeBackground() {
  document.getElementsByTagName("body")[0].style.transition = "background-color 3s linear";
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255, 255, 255)";
}