let SwitchTrialSet = [];


// Pop-up box to confirm start of trial
function SwitchConfirmStart() {
	if(confirm('Are you ready to begin?')) {
    // Hide the forms and instruction page
    document.getElementById('attribution').style.visibility = 'hidden';
    document.getElementById('instructionPage1').style.visibility = 'hidden';
    // Set up the trials for use
    SwitchTrialArrayGen(SwitchFetchTrialSet()); // SwitchFetchTrialSet() - SwitchTrialSets.js (config)
    // Push view to Test Screen
    pushView('TestPageContainer');
  }
}

// Generate the arrays (Called from above)
function SwitchTrialArrayGen(SwitchTrialBaseSet) {
  for (let i = 0; i < SwitchTrialSetCount; i++) { // SwitchTrialSetCount (const) - SwitchTrialSet.js (config)
    for (let j = 0; j < SwitchTrialBaseSet.length; j++) {
      SwitchTrialSet.push(SwitchTrialBaseSet[j]);
    }
  }
  // Now we've produced the array, let's shuffle it!
  SwitchTrialSet = SwitchShuffleArray(SwitchTrialSet); // SwitchArrayShuffle.js
  
  // Call the start of the trial - SwitchTrial.js
  SwitchTrialStart(SwitchTrialSet);
}

