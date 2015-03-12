'use strict';

angular.module('event')
  .controller('MonthController', ['MonthService', '$mdDialog', function (MonthService, $mdDialog) {
    var register = this;

    register.months = MonthService.getMonths();

    register.selectedMonth = 2;

    register.current = 0;

    register.eventID = null;
    register.dayID = null;

    register.adding = true;
    register.editing = false;

    register.showEventModal = function (ev, dayID, eventID, editing, adding) {
      register.current = dayID;
      $mdDialog.show({
        controller: 'DayController',
        controllerAs: 'register',
        templateUrl: './app/event/partials/new.event.partial.html',
        targetEvent: ev,
        locals: {
          currentMonth: register.selectedMonth,
          currentDay: dayID,
          currentEvent: eventID,
          editing: editing,
          adding: adding
        }
      })
      .then(function (answer) {

      },
      function () {

      });
    };

  }]);