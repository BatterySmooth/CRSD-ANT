function GenerateURL {
  $ParticipantID = Read-Host "Please enter the participant's ID"
  if ($ParticipantID -in $CSV.ID) {
    Start-Sleep 5000
  } else {
    Write-Host "ID Not Found"
    GenerateURL
  }
}
Write-Host $($PSScriptRoot)\Participants.csv
$CSV = Import-Csv -Path "$($PSScriptRoot)\Participants.csv"
Write-Host $CSV.ID
GenerateURL