// Number of each option below to include in the final array
const SwitchTrialSetCount = 50;
// const SwitchTrialSetCount = 1;

// Base Switch trial options
function SwitchFetchTrialSet() {
  // [Arrow Direction (UP/DOWN), Arrow Colour (BLUE/RED)]
  return [
    ['UP'  ,'BLUE'],
    ['DOWN','BLUE'],
    ['UP'  ,'RED' ],
    ['DOWN','RED' ]
  ];
}