'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/NewEvent', 
			{
				templateUrl: 'templates/NewEvent.html',
				controller: 'EditEventController'
			})
	});