angular.module('event')
  .factory('MonthService', ['$http', '$localStorage', function ($http, $localStorage) {

  var months = [];

  return {
    getMonths: function () {
      if (!$localStorage.calendar) {
        $http.get('./assets/data/events.json')
          .success(function (response) {
            for (var i = 0, dataLength = response.length; i < dataLength; i++) {
              months.push(response[i]);
            }

            $localStorage.calendar = months;
            return $localStorage.calendar;
          });
      }

      return $localStorage.calendar;
    },

    addEvent: function (monthID, dayID, eventData) {
      $localStorage.calendar[monthID].days[dayID].events.push(eventData);
    },

    saveEvent: function (monthID, dayID, eventID, eventData) {
      $localStorage.calendar[monthID].days[dayID].events[eventID] = eventData;
    },

    removeEvent: function (monthID, dayID, eventID) {
      $localStorage.calendar[monthID].days[dayID].events.splice(eventID, 1);
    },

    getFirstDayID: function (monthID) {
      var days = $localStorage.calendar[monthID].days;
      for (var i = 0, dayCount = days.length; i < dayCount; i++) {
        if (days[i].id === 1) {
          return i;
        }
      }
    }
  };

  }]);