function GlobalNavigate(CurrentPage) {
  let NavFirstTrial = sessionStorage.getItem('FirstTrial');
  switch(CurrentPage) {
    case 'input':
      if (NavFirstTrial == "CRSD-ANT") {
        window.location.href = "ANT.html"
      } else {
        window.location.href = "Switch.html"
      }
      break;

    case 'ANT':
      if (NavFirstTrial == "CRSD-ANT") {
        window.location.href = "break.html"
      } else {
        window.location.href = "export.html"
      }
      break;

    case 'break':
      if (NavFirstTrial == "CRSD-ANT") {
        window.location.href = "switch.html"
      } else {
        window.location.href = "ANT.html"
      }
      break;

    case 'switch':
      if (NavFirstTrial == "CRSD-ANT") {
        window.location.href = "export.html"
      } else {
        window.location.href = "break.html"
      }
      break;
  }
}