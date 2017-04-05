// getting message from main traid

onmessage = function(event) {

	// making data JSON

    let arrData = typeof event.data.JSONData != 'object' ? JSON.parse(event.data.JSONData) : event.data.JSONData;
    let CSV = '', row, rowForLog;

	// setting headers to CSV

    if (event.data.showLabel) {
        row = "";
        for (var index in arrData) {
        	row += index + ',';
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }

	// filling the rows

    row = "";
    rowForLog = "";
    for (var index in arrData) {
    	if (index == 'BankLogHistory') {
			for (var key in arrData[index][0]) {
				if (key != '$$hashKey') {
					row += '"' + key + '",';
				}
			}
	        row.slice(0, row.length - 1);
	        CSV += row + '\r\n';
			for (var i = 0; i < arrData[index].length; i++) {
				row = rowForLog;
				for (var key in arrData[index][i]) {
					if (key != '$$hashKey') {
						if (key == 'TransactionDate') {
							var dataForTime = new Date(arrData[index][i][key]);
							row += '"' + dataForTime + '",';
						} else {
							row += '"' + arrData[index][i][key] + '",';
						}
					}
				}
				row.slice(0, row.length - 1);
    			CSV += row + '\r\n';
			}
    	} else if (index == 'ContestDate') {
    		var item = new Date(arrData[index][index]);
    		row += '"' + item + '",';
    		rowForLog += '"",';
    	} else {
			rowForLog += '"",';
        	row += '"' + arrData[index] + '",';
    	}
    }

	// checking if the report is empty

    if (CSV == '') {
        return;
    }

	// setting file name

    let fileName = event.data.reportTitle;

	// making link for

    let uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

	// sending data from worker to main traid

	postMessage({
		uri 		: uri,
		fileName 	: fileName
	});
};
