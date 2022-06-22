function InputSubmitForm() {
  id = document.getElementById('ID').value;
	age = document.getElementById('age').value;
	for (var i=0; i < document.form.gender.length; i++) {
	   if (document.form.gender[i].checked) {
	      gender = document.form.gender[i].value;
	   }
	}
	sessionNumber = document.getElementById('sessionNumber').value;
	studyID = document.getElementById('studyID').value;
	groupID = document.getElementById('groupID').value;
  firstTrial = document.getElementById('FirstTrial').value;

	if (id && age && gender && sessionNumber && studyID && groupID && firstTrial) {
		round = sessionStorage.getItem("round");
		StoreInputData(id, age, gender, sessionNumber, studyID, groupID, firstTrial, round);
		GlobalNavigate('input');
	} else {
		window.alert("Please fill in all the fields in the form before continuing");
	}
}

function StoreInputData(ID, Age, Gender, SessionNumber, StudyID, GroupID, FirstTrial) {
	sessionStorage.clear;
	sessionStorage.setItem("ID", ID);
	sessionStorage.setItem("Age", Age);
	sessionStorage.setItem("Gender", Gender);
	sessionStorage.setItem("SessionNumber", SessionNumber);
	sessionStorage.setItem("StudyID", StudyID);
	sessionStorage.setItem("GroupID", GroupID);
  sessionStorage.setItem("FirstTrial", FirstTrial);
	sessionStorage.setItem("round", round);
}