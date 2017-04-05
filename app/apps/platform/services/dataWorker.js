/* Facade part
* 
* @@data - this is data that we get from BE
* @@serviceName - this data restructuring function (optional)
* @@options - this message from errorHandler about
* @@eventName - this is the event we need to give to disaptcher (optional)
* bad data
*
* Here is used something like AER
* serviceName and the eventName are the same which gives me a chance to give one argument less
*/

define([], () => {
	'use strict';

	var dataWorker = (dispatcherSrv, dataRestructure) => {
		let message, data = {};
		let _make = (data, opt) => {
			if(dataRestructure[opt]) {
				message = dataRestructure[opt](data.data.Result);
			} else {
				message = data.data.Result || 'ok';
			}
			dispatcherSrv.broadcast(opt, message);			
		};
		let _error = (data) => {
			dispatcherSrv.broadcast('error', data);
		};
		return {
			make(data, opt) {
				_make(data, opt);
			},
			error(data) {
				_error(data);
			}
		}
	}
	
	dataWorker.$inject = ['dispatcherSrv', 'dataRestructure'];

	return dataWorker;
});
