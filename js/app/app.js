(function () {
  var app = angular.module('calendar', [

  ]);

  app.controller('EventController', ['$scope', function ($scope) {
    this.events = [
      {
        "title": "",
        "day": 1
      },

      {
        "title": "",
        "day": 2
      },

      {
        "title": "",
        "day": 3
      },

      {
        "title": "",
        "day": 4
      },

      {
        "title": "",
        "day": 5
      },

      {
        "title": "Grade Udacity project.",
        "day": 6
      },

      {
        "title": "Take Edx Python class exam.",
        "day": 7
      },

      {
        "title": "Facilitate Discrete Math class",
        "day": 8
      },
    ];

    this.heading = "Calendar";
  }] );
}());