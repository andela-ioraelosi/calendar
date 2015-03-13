'use strict';

angular.module('event')
  .controller('DayController', ['MonthService', 'currentMonth', 'currentDay', 'currentEvent', 'editing', 'adding', '$scope', function (MonthService, currentMonth, currentDay, currentEvent, editing, adding, $scope) {
    var register = this;

    register.firstDayID = MonthService.getFirstDayID(currentMonth);

    register.dayID = (currentDay ? currentDay : 1) - 1 + register.firstDayID;
    register.selectedMonth = currentMonth;
    register.eventID = currentEvent;

    register.adding = true;
    register.editing = false;

    register.months = MonthService.getMonths();
    register.events = register.months[register.selectedMonth].days[register.dayID].events;

    register.prepareEdit = function (eventID, eventData) {
      register.editing = true;
      register.adding = false;
      register.newEvent = eventData;
      register.eventID = eventID;
    };

    register.addEvent = function (eventData) {
      var newEvent = {};
      newEvent.title = eventData.title;

      MonthService.addEvent(register.selectedMonth, register.dayID, newEvent);
    };

    register.saveEvent = function (newEventData) {
      var editedEvent = {};
      editedEvent.title = newEventData.title;

      MonthService.saveEvent(register.selectedMonth, register.dayID, register.eventID, editedEvent);

      register.editing = false;
      register.adding = true;
    };

    register.removeEvent = function (eventID) {

      MonthService.removeEvent(register.selectedMonth, register.dayID, eventID);
    };

  }]);