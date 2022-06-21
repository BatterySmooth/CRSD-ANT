function SwitchValidateArray(Array) {                                                   // Called from SwitchArrayShuffle.js
  let OutputArray = [];
  let LastColour = "";
  let ConsecutivityCounter = 0;

  for (let i = Array.length - 1; i >= 0; i--) {
    if (Array[i][1] == LastColour && ConsecutivityCounter < 6) {                        // Same colour, not over 6 repeats
      OutputArray.push(Array[i]);                                                       // Add element to OutputArray
      LastColour = Array[i][1]                                                          // Set the Last Colour to the current colour
      Array.splice(i,1);                                                                // Remove entry from input array
      ConsecutivityCounter++;                                                           // Increment the Consecutivity Counter
    } else if (Array[i][1] == LastColour && ConsecutivityCounter >= 6) {                // Same colour, over 6 repeats - need to find the next viable colour
      for (let j = Array.length - 1; j >= 0; j--) {                                     // Loop over input array to find another colour
        if (Array[j][1] != LastColour) {
          OutputArray.push(Array[j]);                                                   // Add element to OutputArray
          LastColour = Array[i][1]                                                      // Set the Last Colour to the current colour
          ConsecutivityCounter = 1;                                                     // Reset the Consecutivity Counter
          Array.splice(j,1);                                                            // Remove entry from input array
          break;                                                                        // Break from loop
        }
      }
    }  else if (Array[i][1] != LastColour) {                                            // Different colour
      OutputArray.push(Array[i]);                                                       // Add element to OutputArray
      ConsecutivityCounter = 1;                                                         // Reset the Consecutivity Counter
      LastColour = Array[i][1];                                                         // Set the Last Colour to the current colour
      Array.splice(i,1);                                                                // Remove entry from input array
    }
  }
  return OutputArray;
}