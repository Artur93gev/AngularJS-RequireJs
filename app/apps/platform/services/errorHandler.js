/* Error handler
*
* each request from httpSrv is calling 
* check(promise, serviceName, eventName) to be sure that data is ok
* @@promise - includes the data that must be checked
* @@serviceName - is the function that must be called from facade
* to make suitable data to show
*/


define([], () => {
	'use strict';

	var errorHandler = (dataWorker, dispatcherSrv) => {
		let data;
		let _check = (promise, opt) => {
			promise.then(
				(res) => {
					if (res.data.ErrorMessage) {
						// this means that something went wrong
						// but BE knows about that and sent this message
						data = {
							text 		: res.data.ErrorMessage,
							header		: 'Notification',
							applyButton	: 'Ok'			
						};
						return dataWorker.error(data);
					}
					if (typeof res.data.Result === 'string') {
						// this means that something went wrong but 
						// BE didn't know about that
						data = {
							header 		: 'Error',
							applyButton : 'Ok',
							text 		: 'Server is down.Try a little bit later'
						};
						return dataWorker.error(data);
					}
					if (res.data.Result == null && res.data.status == 0) {
						data = {
							header 		: 'Notification',
							applyButton	: 'Ok',
							text 		: 'You did not act for more.Please login again'
						};
                        dispatcherSrv.broadcast('currentState', 'login');
						return dataWorker.error(data);
					}
					return dataWorker.make(res, opt);
				},
				(err) => {
					data = {
						text 			: "Service not available.Sorry, We can't get your " + opt + " now!",
						header 			: 'Notification',
						applyButton 	: 'OK',
						event 			: opt
					};
					/// this is wrong data or call send's result
					if (err.status == 404) {
						// then there is or such path to do the call page not found or service not available
					}
					if (err.status >= 500) {
						// then there's a server Internal error
                        dispatcherSrv.broadcast('currentState', 'login');
					}
					if (err.status == 400) {
						// then we have Bad request
					}
					return dataWorker.error(data);
				}
			);
		};
		return  {
			check(promise, opt) {
				return _check(promise, opt);
			}
		}
	}

	errorHandler.$inject = ['dataWorker', 'dispatcherSrv'];

	return errorHandler;
});
