/* Requests part
*
* all the requests are sending from this service
* @@opitons - this is request options 
* @@serviceName - this is the function that must be  passed to error-handler
*/
define([], () => {
	'use strict';

	var httpSrv = ($http, $q, errorHandler) => {
		let req, hostUrl, request, deferred;
	    hostUrl   = "some_url";

		let _request = (req, opt) => {
			req.url = hostUrl + req.url;
			deferred = $q.defer();
			$http(req)
				.then(
					(res) => {
						deferred.resolve(res);
					},
					(err) => {
						deferred.reject(err);
					}
				);
			errorHandler.check(deferred.promise, opt);
		};
		return {
			request(options, opt) {
				return _request(options, opt);
			}
		};

	}

	httpSrv.$inject = ['$http', '$q', 'errorHandler'];
	
	return httpSrv;
});
