'use strict';

eventsApp.controller('eventController',
  function eventController($scope) {

    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
        address: 'Google HQ',
        city: 'Mountain View',
        province: 'CA'
      },
      imageURL: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Ben MacLean',
          duration: '1 hour',
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of Directives!',
          upVoteCount: 0,
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'Tom MacLean',
          duration: '2 hours',
          level: 'Advanced',
          abstract: 'In this session you will learn about Scopes!',
          upVoteCount: 0,
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Dan MacLean',
          duration: '1 hour',
          level: 'Advanced',
          abstract: 'In this session you will learn about Controllers!',
          upVoteCount: 0,
        }
      ]
    }
  }
);
