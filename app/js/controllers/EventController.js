"use strict";

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $anchorScroll) {

		$scope.sortorder = 'name';

		eventData.getEvent().then(function(event) {
			$scope.event = event;
		}, function(status) {
			console.log(status); // error
		});

		// $scope.event = eventData.getEvent();
		
		$scope.upVoteSession = function(session, event) {
			console.log(event);
			console.log($scope.event);

			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};

		$scope.scrollToSession = function() {
			$anchorScroll();
		}
	}
);