let ANTDownloadInnerHTML = "";
let SwitchDownloadInnerHTML = "";

function createDownloadLink(DivName,InnerHTML) {
	document.getElementById(DivName).innerHTML = InnerHTML;
}

function ClickDownloadLink(divName) {
	document.getElementById(divName).click();
}

function DownloadAllData() {
  createDownloadLink("ANTDownloadLink", sessionStorage.getItem("ANTData"));
  createDownloadLink("SwitchDownloadLink", sessionStorage.getItem("SwitchData"));
  ClickDownloadLink("ANTDataDownloadAnchor");
  ClickDownloadLink("SwitchDataDownloadAnchor");
}