// This is the analysis and prep of the trial to create the required outputs.
// The output from the trial is contained in SwitchTrialResults, which we will operate on to generate the export data.

function SwitchGenerateData(TrialResults) {
  let SwitchOutputData = [];
  // The first row is the headings
  SwitchOutputData[0] = [
    'Participant ID',
    'Target Direction',
    'Target Colour',
    'Time at Stage 1',
    'Time at Stage 2',
    'Time at Stage 3',
    'Time at Next Stage',
    'Time at Response',
    'Response Key',
    'Cross Display Interval',
    'Stage 1 Time',
    'Stage 2 Time',
    'Stage 3 Time',
    'Next Stage Time',
    'Response Time',
    'Response Correct',
    'Switch Task'
  ];

  let SwitchParticipantID = sessionStorage.getItem("ID");
  for (let i = 0; i < TrialResults.length; i++) {                                        // For each of the entries in the Trial Results
    SwitchOutputData[i+1] = [                                                            // Add 1 to the Output Data array to account for headings
      SwitchParticipantID,                                                               // Participant ID
      TrialResults[i][0],                                                                // Target Direction
      TrialResults[i][1],                                                                // Target Colour
      TrialResults[i][2],                                                                // Time at Stage 1
      TrialResults[i][3],                                                                // Time at Stage 2
      TrialResults[i][4],                                                                // Time at Stage 3
      TrialResults[i][5],                                                                // Time at Next Stage
      TrialResults[i][6],                                                                // Time at Response
      TrialResults[i][7],                                                                // Response Key value
      TrialResults[i][8],                                                                // Cross Display Interval
      TrialResults[i][3]-TrialResults[i][2],                                             // Actual Stage 1 Time (ms)
      TrialResults[i][4]-TrialResults[i][3],                                             // Actual Stage 2 Time (ms)
      TrialResults[i][5]-TrialResults[i][4],                                             // Actual Stage 3 Time (ms)
      "N/A",                                                                             // Actual Next Stage Time (ms) (to be overwritten later if not the last trial)
      Math.max(TrialResults[i][6]-TrialResults[i][3], 0),                                // Response time, capped at 0 in case of no response
      SwitchCheckResponse(TrialResults[i][7], TrialResults[i][0], TrialResults[i][1]),   // Check if response is correct
      "N/A"                                                                              // Check if the trial is a switch trial (to be overwritten later if not the first trial)
    ];
    if (i < TrialResults.length-1) {                                                     // Next Stage Timing if not the last trial
      SwitchOutputData[i+1][13] = TrialResults[i+1][2]-TrialResults[i][5];
    }
    if (i+1 != 1) {                                                                      // Switch trial if not the first trial
      SwitchOutputData[i+1][16] = TrialResults[i-1][1]==TrialResults[i][1];
    }
  }
  return SwitchOutputData;                                                               // Return the new output data to the export call in SwitchExport.js
}

function SwitchCheckResponse(Response, Direction, Colour) {
  let Result = false;                                                                           
    if ((Response == 38 && Direction == "UP" && Colour == "BLUE") || (Response == 38 && Direction == "DOWN" && Colour == "RED")) {  // Response = Up Key
      Result = true;
    }                                                                 
    else if ((Response == 40 && Direction == "DOWN" && Colour == "BLUE") || (Response == 40 && Direction == "UP" && Colour == "RED")) {  // Response = Down Key
      Result = true;
    }
  return Result;
}