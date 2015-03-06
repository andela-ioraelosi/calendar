(function () {
  var app = angular.module('calendar', [

  ]);

  app.controller('EventController', ['$scope', function ($scope) {
    this.events = [
      {
        "title": "Facilitate Discrete Math meeting.",
        "date": 8
      },
      {
        "title": "Take Python class exam.",
        "date": 7
      }
    ];

    this.heading = "Calendar";
  }] );
}());