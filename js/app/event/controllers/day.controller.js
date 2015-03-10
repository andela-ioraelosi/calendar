'use strict';

angular.module('event')
  .controller('DayController', ['MonthService', 'currentMonth', 'currentDay', 'currentEvent', 'editing', 'adding', function (MonthService, currentMonth, currentDay, currentEvent, editing, adding) {
    var register = this;

    register.dayID = currentDay;
    register.selectedMonth = currentMonth;
    register.eventID = currentEvent;

    register.adding = true;
    register.editing = false;

    MonthService.getMonths().then(function (months) {
      register.months = months;
      register.events = months[register.selectedMonth].days[register.dayID - 1].events;
    });

    register.prepareEdit = function (eventID, eventData) {
      register.editing = true;
      register.adding = false;
      register.newEvent = eventData;
      register.eventID = eventID;
    };

    register.addEvent = function (eventData) {
      var newEvent = {};
      newEvent.title = eventData.title;

      register.months[register.selectedMonth].days[register.dayID - 1].events.push(newEvent);
    };

    register.saveEvent = function (newEventData) {
      var editedEvent = {};
      editedEvent.title = newEventData.title;

      register.months[register.selectedMonth].days[register.dayID - 1].events[register.eventID] = editedEvent;

      register.editing = false;
      register.adding = true;
    };

    register.removeEvent = function (eventID) {
      //register.events.splice(eventID, 1);
      register.months[register.selectedMonth].days[register.dayID - 1].events.splice(eventID, 1)
    };

  }]);