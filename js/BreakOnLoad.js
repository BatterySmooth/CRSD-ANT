function BreakOnLoad() {
  if (sessionStorage.getItem('FirstTrial') == "Switch") {
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0, 0, 0)";
    setTimeout(BreakFadeBackground, 500);    
  }
  StartBreakTimer(); //BreakTimer.js
}

function BreakFadeBackground() {
  document.getElementsByTagName("body")[0].style.transition = "background-color 3s linear";
  document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255, 255, 255)";
}