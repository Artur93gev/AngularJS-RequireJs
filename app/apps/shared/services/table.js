define([], () => {
	'use strict';

	let Table;

	angular.module('shared').service('tableConstructor', Table = () => {
		var options = {
			draw : {
				/**/
			},
			pagination : {
				currentPage : Number,
				fn 			: Function
				/**/		
			},
			// optional
			headersControl : {
				headersList : Array,
				hasControl 	: Boolean 
			},
			lineContains : {
				headersList : [
					{
						headername : Function,
					},
					{
						headername : Function,
					},
					{
						headername : Function,
					}
				]
			},
			filter : {
				searchLists : {
					lists: [{
										searchList 	: Array,
										criterion 	: String
									},
									{
										searchList 	: Array,
										criterion 	: String
									}],
					fn: this.list.searchlistfn = function() {
						
					}
				},
				checkboxes : {
					checkboxesLists : [
						{
							checkboxesList : Array, // model name collections
						},
						{
							checkboxesList : Array, // model name collections
						},
						{
							checkboxesList : Array, // model name collections
						}
					],
					checked  : Function // gets the checkboxesList and the item that was touched
				},
				tags 		: Array, //////// not needed
				breadCrumbs : Array, // keeping the way of filtering /////// not needed
				radioButtons : {
					radioButtonsLists : [
						{
							radioButtonsList : Array, // model name collections
						},
						{
							radioButtonsList : Array, // model name collections
						},
						{
							radioButtonsList : Array, // model name collections
						}
					],
					checked : Function // gets radioButtonsList and the item that has been clicked
				},
				calendar : {
					hasCalendar : Boolean,
					targetsCount : Number,
					calendarFunctionality : Function,
				},
				dropdowns : {
					dropdownsLists : [
						{
							dropdownList : Array // model/name collections
						},
						{
							dropdownList : Array // model/name collections 
						},
						{
							dropdownList : Array // model/name collections 
						}
					],
					chooseItems : Function // gets dropdownList and and item that was selected private
				},
				intervals : {
					intervalsList : {
						interval : {
							start 	: Number,
							end 	: Number
						}
					}
				}
			},
			headersOrder : {
				hasHeadersOrder : Boolean,
				headersList : [
					{
						headerName 	: String,
						headerFn 	: Function
					},
					{
						headerName 	: String,
						headerFn 	: Function
					},
					{
						headerName 	: String,
						headerFn 	: Function
					}
				]
			},
			cancelLine : {
				cancelingObj : Array,
				criterion 	 : String, // object property,
				callingFn 	 : Function
			},
			createNewLine : {
				fn : Function // this must be callen when clicking on the button
			}
		}

		function Table(options) {

			/*
			@options is an object that matches
			which parametre must exist
			and which not
			if the key is not than the method not needed
			if it is an object than it's the method's options 
			*/
			this.draw = function() {
				/*
					required
				*/
			}
			this.pagination = function() {
				/*
				required 
				rewrite the pagination system functionality to abstract
				*/
			}
			if (options.headersControl)
				this.headersControl = function() {
					/*
						rewrite the headers functionality to abstract
					*/
			}
			if (options.lineContains) {
				this.lineContains = function() {
					/*
					write funcality for line open own modal
					*/
				}
			}
			if (options.filter) {
				this.filter = function() {
					/*
					rewrite filters functionality
					*/
				}
			}
			if (options.headersOrder) {
				this.headersOrder = function() {
					/*
					write headers functionality
					*/
				}
			}
			if (options.cancelLine) {
				this.cancelLine = function() {
					/*
						rewrite cancel functionality to abstract
					*/
				}
			}
			if (options.creatingNewLine) {
				this.creatingNewLine = function() {
					/*
					rewrtie the + buttons functionality
					to take the funciton need to be under it
					*/
				}
			}

			/*
				write each funciton also by options
			*/
		}

		function Draw(headersList, tableContent) {
			/*
				write drawing functionality
			*/
		}

		function Pagination() {
			/*
				restructure our pagingSrv
			*/
			
		}
		function HeadersControl(headersList, flag) {
			this.headersList = headersList;
			if (flag) {
				this.headersControl = function() {
					/*
			check uncheck functionality
					*/
				}
			}
		}

		function LineContains(options) {

			/*
				@options contains headers list that have modals to open
				and each item of headers list has it's own functionality
			*/
		}

		function Filter() {
			
			this.search = function(searchingList) {
				/*
				@searchingList is an array
				each item is search list data and it's criterion
				Restructure search part 
				it has it's own functionality
				*/
			}
			this.checkboxs = function(checkboxsList) {
				/*
				@checkboxsList is an array
				every checkbox is the object that must be rendered
				it has it's own functionaliy
				*/
				this.checked =  function(item) {
					/*
					code bellow
					*/
				}
			}

			this.tags = function() {

				/*
				tags for filters to disable
				*/
			}
			this.breadCrumbs = function() {

				/*
				for go back function to next filter state
				(this means that maybe we need filter state for each one)
				*/
			}

			this.radioButtons = function(radioButtons) {
				/*
				@radioButtons is an array
				every radioButton is a the object that must be rendered
				it has it's own functionaliy
				*/
			}
			this.calendar = function(options) {
				/*
				@options is an object that consists
				-how many date can the calendar allow to choose
				-calendar existing(t/f)
				*/
			}
			this.dropdowns = function(dropdownsList) {
				/*
				@dropdownsList is an array
				every dropdown is a the object that must be rendered
				it has it's own functionaliy
				*/
			}
			this.intervals = function(intervalsList) {
				/*
				@intervalsList is an array
				every intervals is a the object that must be rendered
				it has it's own functionaliy
				*/
			}

			this.buttons = function() {

				/*
				buttuns include select all reset all and search buttons
				*/
			}
		}

		function HeadersOrder(options) {
			/*
			which headers has order function
			and it's functionality
			*/
		}

		function CancelLine(options) {
			/*
			@options is the objectsList that would be canceled,
			request function that must be callen for cancel
			and the criterion by which it must be canceled
			*/
		}

		function CreatingNewLine(options) {
			/*
			@options is the request or function that must be 
			called to create new line
			and the directive or template Url that has to be shown
			*/
		}
	});
});
