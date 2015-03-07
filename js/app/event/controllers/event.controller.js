'use strict';

angular.module('event')
  .controller('EventController', ['EventService', function (EventService) {
    var register = this;
    EventService.getEvents().success(function (data) {
      register.events = data;
    })
    .error(function (err) {
      console.log(err);
    });
  }]);