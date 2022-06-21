// Performing a Fisher-Yates Shuffle on an array
function SwitchShuffleArray(Array) {
  let CurrentIndex = Array.length,  RandomIndex;

  while (CurrentIndex != 0) {                                                           // While there remain elements to shuffle.
    RandomIndex = Math.floor(Math.random() * CurrentIndex);                             // Pick a remaining element.
    CurrentIndex--;
    [Array[CurrentIndex], Array[RandomIndex]] = [                                       // And swap it with the current element.
      Array[RandomIndex], Array[CurrentIndex]];
  }
  Array = SwitchValidateArray(Array);                                                   // Once Shuffled, confirm there are no more than 6 consecutive Blues or Reds - SwitchValidateArray.js
  return Array;                                                                         // Return processed Array
}


