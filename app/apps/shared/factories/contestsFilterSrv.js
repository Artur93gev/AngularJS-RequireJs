// this is for Anush
define(['contestCreateFactory'], () => {
	'use strict';

	let contestsFilterSrv;

	angular.module('shared').factory('contestsFilterSrv', contestsFilterSrv = (backOfficeCreateContestSrv) => {
		return function() {
			let key, i, dataFromSrv = new backOfficeCreateContestSrv();
			this.arrForList = ['sport type', 'contest type', 'contest status', 'contest duration', 'entry type', 'created type', 'privacy'];
			this.contestDetails = {
				'sport type' 		: [
					{
						name 	: 'Soccer',
						id 		: 2,
						model 	: false
					},
					{
						name 	: 'NFL',
						id 		: 163,
						model 	: false
					},
					{
						name 	: 'NBA',
						id 		: 164,
						model 	: false
					},
					{
						name 	: 'NHL',
						id 		: 166,
						model 	: false
					},
					{
						name 	: 'MLB',
						id 		: 165,
						model 	: false
					}
					// ,
					// {
					// 	name 	: 'E-sports',
					// 	id 		: 167,
					// 	model 	: false
					// }
				],
				'contest type' 		: dataFromSrv.arrContestType,
				'contest status'	: [
					{
						name 	: 'live',
						id 		: 1,
						model 	: false
					},
					{
						name 	: 'upcoming',
						id 		: 2,
						model 	: false
					},
					{
						name 	: 'finished',
						id 		: 3,
						model 	: false
					},
					{
						name 	: 'canceled',
						id 		: 4,
						model 	: false
					},
					{
						name 	: 'inActive',
						id 		: 5,
						model 	: false
					},
					{
						name 	: 'hidden',
						id 		: 6,
						model 	: false
					},
					{
						name 	: 'inVisible',
						id 		: 7,
						model 	: false
					},
					{
						name 	: 'open',
						id 		: 8,
						model 	: false
					},
				],
				'contest duration'	: dataFromSrv.arrContestTime,
				'entry type'		: dataFromSrv.arrContestEntries,
				'created type'		: [
					{
						name 	: 'admin',
						id 		: 1,
						model 	: false
					},
					{
						name 	: 'user',
						id 		: 2,
						model 	: false
					}
				],
				'privacy'			: [
					{
						name 	: 'private',
						id 		: 1,
						model 	: false
					},{
						name 	: 'public',
						id 		: 2,
						model 	: false	
					}
				]
			}
			for (key in this.contestDetails) {
				for (i = 0; i < this.contestDetails[key].length; i++) {
					if (key != 'sport type') {
						this.contestDetails[key][i].model = true;
					} else {
						this.contestDetails[key][i].model = true;
						break;
					}
				}
			}
			this.prizes = dataFromSrv.arrPrizes;
			for (i = 0; i < this.prizes.length; i++) {
				this.prizes[i].model = true;
			}
		}
	});

	contestsFilterSrv.$inject = ['backOfficeCreateContestSrv'];
});
