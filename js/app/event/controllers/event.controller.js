'use strict';

angular.module('event')
  .controller('EventController', ['EventService', function (EventService) {
    var register = this;
    register.events = [];
    register.current = 0;

    register.eventID = null;
    register.dayID = null;

    register.adding = true;
    register.editing = false;

    EventService.getEvents().success(function (data) {
      register.events = data.days;
    })
    .error(function (err) {
      console.log(err);
    });

    register.addEvent = function (dayID, eventData) {
      var newEvent = {};
      newEvent.title = eventData.title;

      register.events[dayID - 1].events.push(newEvent);
      register.newEvent = {};
    };

    register.prepareEdit = function (dayID, eventData, eventID) {
      register.editing = true;
      register.adding = false;
      register.newEvent = eventData;
      register.eventID = eventID;
      register.dayID = dayID;
    };

    register.editEvent = function () {
      var editedEvent = {};
      editedEvent.title = register.newEvent.title;
      register.events[register.dayID - 1].events[register.eventID] = editedEvent;
      register.editing = false;
      register.adding = true;
      register.newEvent = {};
    }

    register.removeEvent = function (dayID, eventID) {
      register.events[dayID - 1].events.splice(eventID, 1);
    };
  }]);