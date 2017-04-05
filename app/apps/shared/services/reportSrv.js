define([], () => {
	'use strict';

	let bankReportSrv;
	
	angular.module('shared').service('bankReportSrv', bankReportSrv = ($q) => {

		// creating a web worker for making report

		var worker = new Worker('app/assets/js/utils/report.js'), defer = $q.defer(), link;

		// getting data from worker traid

		worker.onmessage = (event) => {
			link = document.createElement("a");
		    link.href = event.data.uri;
		    link.style = "visibility:hidden";
		    link.download = event.data.fileName + ".csv";
		    document.body.appendChild(link);
		    link.click();
		    document.body.removeChild(link);
			defer.resolve(event.data);

			// destroying worker's traid

			worker.terminate();
		};

		let _JSONToCSVConvertor = (JSONData, reportTitle, showLabel) => {

				defer = $q.defer();

				// sending data to worker traid

				worker.postMessage(
					{
						JSONData 	: JSONData,
						reportTitle : reportTitle,
						showLabel 	: showLabel
					}
				);
				return defer.promise;
		}
		
		return {
			JSONToCSVConvertor(JSONData, reportTitle, showLabel) {
				return _JSONToCSVConvertor(JSONData, reportTitle, showLabel);
			}
		}
	});

	bankReportSrv.$inject = ['$q'];
});
