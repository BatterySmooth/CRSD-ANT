// Stages:
// 1) Cross is being shown (500ms - 750ms [setpped in 10ms])
// 2) Target shown (500ms)
// 3) Black Screen (500ms, Inter-trial)
//
// Responses can be given from when the target is shown, until when the cross is next shown
// It is risky to perform acrinos after the timouts have been set, but it keeps the timing lined up

let SwitchTrialIndex = 0;
let SwitchTrialResults = [];
let CrossDisplayInterval = 0;

let SwitchTrialStage1Time = 0;
let SwitchTrialStage2Time = 0;
let SwitchTrialStage3Time = 0;
let SwitchTrialNextTime = 0;
let SwitchTrialResponse = 0;
let SwitchTrialResponseTime = 0;

function SwitchTrialStart(TrialArray) {                 // Show Blank, Set up Trial array
  SwitchTrialSet = TrialArray;                          // Set Trial Array - Not sure if this is needed?
  CrossDisplayInterval = RandBetween(50, 75) * 10;      // Generate blanking interval for first Trial
  SwitchTrialStage1();                                  // Move to Stage 1
}

function SwitchTrialStage1() {                          // Show Cross
  SwitchTrialStage1Time = new Date().getTime();         // Set Stage 1 Time for output
  setTimeout(SwitchTrialStage2, CrossDisplayInterval);  // Set a timeout for Stage 2
  SwitchTrialShowCross();                               // Show the cross on the trial screen
  SwitchTrialResponse = 0;                              // Reset Trial Response
  SwitchTrialResponseTime = 0;                          // Reset Trial Response Time
}

function SwitchTrialStage2() {                          // Show Target
  SwitchTrialStage2Time = new Date().getTime();         // Set Stage 2 Time for output
  setTimeout(SwitchTrialStage3, 500);                   // Set Timout for progressing to the next stage
  document.onkeydown = SwitchTrialKeypress;             // Enable Keypress event
  switch(SwitchTrialSet[SwitchTrialIndex][0] + SwitchTrialSet[SwitchTrialIndex][1]) {
    case 'UPBLUE':
      SwitchTrialBlueUp();
      break;
    case 'DOWNBLUE':
      SwitchTrialBlueDown();
      break;
    case 'UPRED':
      SwitchTrialRedUp();
      break;
    case 'DOWNRED':
      SwitchTrialRedDown();
      break;
    default:
      SwitchTrialBlank();
  }
}

function SwitchTrialStage3() {                          // Show Blank
  SwitchTrialStage3Time = new Date().getTime();         // Set Stage 3 Time for output
  setTimeout(SwitchTrialNext, 500);                     // Set Timout for progressing to the next stage
  SwitchTrialBlank();                                   // Blank the trial screen
  SwitchTrialIndex++;                                   // Increment Index counter for next trial
}

function SwitchTrialNext() {                            // Move to next trial
  SwitchTrialNextTime = new Date().getTime();           // Set Next Stage Time for output
  document.onkeydown = null                             // Disable Keypress event
  SwitchTrialResults.push([                             // Collect Trial Stage Results - Risky to do this at this point, but keeps the timing lined up
    SwitchTrialSet[SwitchTrialIndex-1][0],              // Target Direction (index minus 1 due to index increment in Stage 3)
    SwitchTrialSet[SwitchTrialIndex-1][1],              // Target Colour (index minus 1 due to index increment in Stage 3)
    SwitchTrialStage1Time,                              // Time at Stage 1
    SwitchTrialStage2Time,                              // Time at Stage 2
    SwitchTrialStage3Time,                              // Time at Stage 3
    SwitchTrialNextTime,                                // Time at Next Stage
    SwitchTrialResponseTime,                            // Response Time
    SwitchTrialResponse,                                // Response Keyvalue
    CrossDisplayInterval                                // Cross Display Interval
  ]);
  if (SwitchTrialIndex < SwitchTrialSet.length) {       // Check if we have exhausted trial set
    CrossDisplayInterval = RandBetween(50, 75) * 10;    // Generate blanking interval for next Trial
    SwitchTrialStage1();                                // Move back to Stage 1 if not
  } else {
    GenerateExportLink(SwitchTrialResults);             // Generate Export link for page
    SwitchNextTrial();                                  // Continue to export page if so (SwitchNavigation.js)
  }
}

function SwitchTrialKeypress(e) {                       // Keypress event handler
  switch (e.keyCode) {                                  // Switch code triggers when either Up or Down is pressed
    case 38:                                            // Up arrow pressed
    case 40:                                            // Down arrow pressed
      SwitchTrialResponseTime = new Date().getTime();   // Grab response time
      SwitchTrialResponse = e.keyCode;                  // Set the response to the key pressed
      document.onkeydown = null;                        // Disable keypress event
      break;                                            // Break from the switch, don't be forgetting that!
  }
}

// Random Int Generator for the blanking interval
function RandBetween(min, max) {                        // min and max values, inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Element Control Functions
function SwitchTrialBlank() {
  document.getElementById('SwitchCueRedUp').style.visibility = "hidden";
  document.getElementById('SwitchCueRedDown').style.visibility = "hidden";
  document.getElementById('SwitchCueBlueUp').style.visibility = "hidden";
  document.getElementById('SwitchCueBlueDown').style.visibility = "hidden";
}
function SwitchTrialRedUp() {
  document.getElementById('TrialFixationCross').style.visibility = "hidden";
  document.getElementById('SwitchCueRedUp').style.visibility = "visible";
}
function SwitchTrialRedDown() {
  document.getElementById('TrialFixationCross').style.visibility = "hidden";
  document.getElementById('SwitchCueRedDown').style.visibility = "visible";
}
function SwitchTrialBlueUp() {
  document.getElementById('TrialFixationCross').style.visibility = "hidden";
  document.getElementById('SwitchCueBlueUp').style.visibility = "visible";
}
function SwitchTrialBlueDown() {
  document.getElementById('TrialFixationCross').style.visibility = "hidden";
  document.getElementById('SwitchCueBlueDown').style.visibility = "visible";
}
function SwitchTrialShowCross() {
  SwitchTrialBlank();
  document.getElementById('TrialFixationCross').style.visibility = "visible";
}