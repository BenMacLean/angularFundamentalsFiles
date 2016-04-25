'use strict';

eventsApp.controller('eventController',
  function eventController($scope) {

    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am'
    }
  }
);
