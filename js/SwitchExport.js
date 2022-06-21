//Takes the data as a multidimensional array and builds it into a nice CSV string, with an optional newline character.  It is recommended to just use \r\n, as it should produce a newline on every platform, but if you want to include code to detect the platform you can do that, and pass in the appropriate newline string.
function dataCSV(data,newline) {
	csv = "";					//Start with an empty string
	for (dataRow in data) {		//Iterate through the rows
		//We then iterate through every column but the last one, since the last doesn't need a comma
		for (dataCell=0;(dataCell<((data[dataRow].length)-1));dataCell++) {
			csv += data[dataRow][dataCell]+",";
		}
		csv += data[dataRow][dataCell];		//Finalize the row with the last column
		if (newline != null) {				//Use a specific newline, if given
			csv += newline;
		} else {
			csv += '\r\n';
		}
	}
	return csv;
}

//Generates the data URI, which contains the contents of the test.  This can be linked to so that, in the event that a user doesn't have flash 10, the user may still download/open the data in a new window
//Takes the data in CSV string format
function dataURI(csvData,mimeType) {
	return "data:"+mimeType+";charset=utf-8,"+csvData;
}

//Gerates the download link to download the data as .csv
function createDownloadData(exportFilename,data,downloadLinkText) {
	let SwitchData = '<a id="SwitchDataDownloadAnchor" href="'+dataURI(dataCSV(data,'%0D%0A'),'text/plain')+'" download="'+exportFilename+'" target="_blank">'+downloadLinkText+'</a>';
	sessionStorage.setItem("SwitchData", SwitchData);
}

//Generates the flash links and the textual new-window links from the data.
function GenerateExportLink(data) {
	ExportDate = new Date();
	fileName = 'Switch - '+sessionStorage.getItem("ID")+' - '+(new Date().toISOString());
	
	let csvData = SwitchGenerateData(data);                         // SwitchGenerateResults.js

	//To create the download link
	createDownloadData(fileName+' - Data.csv',csvData,"Download Switch raw data export");
	// DownloadAllData();

	// Navigate depending on next trial
	GlobalNavigate('switch');
}
