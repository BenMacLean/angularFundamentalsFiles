'use strict'

eventsApp.controller('editEventController',
  function editEventController($scope) {
    $scope.saveEvent = function(event, newEventForm) {
      console.log(newEventForm);
      if(newEventForm.$valid) {
        window.alert('event ' + event.name + ' saved!');
      }
    };

    $scope.cancelEdit = function() {
      window.location = "/eventDetails.html";
    }
  }
);
