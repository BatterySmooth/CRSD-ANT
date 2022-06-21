let RunBreakTimer = false;
let TimerSecs = 0;

function StartBreakTimer() {
  RunBreakTimer = true;
  setTimeout(BreakTimerTicker, 1000);
}

function BreakTimerTicker() {
  if(RunBreakTimer) {
    ++TimerSecs;
    setTimeout(BreakTimerTicker, 1000);
    let BreakTimerSecs = ("0" + parseInt(TimerSecs % 60)).slice(-2);
    let BreakTimerMins = ("0" + Math.floor((TimerSecs/60))).slice(-2);
    document.getElementById('BreakTimerLabel').innerHTML = BreakTimerMins + ":" + BreakTimerSecs; 
  }
}

function StopBreakTimer() {
  RunBreakTimer = false;
}