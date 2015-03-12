angular.module('event')
  .factory('MonthService', ['$http', '$q', function ($http, $q) {

  var months = [];

  return {
    getMonths: function () {
      if (months.length === 0) {
        $http.get('./assets/data/events.json')
          .success(function (response) {
            for (var i = 0, dataLength = response.length; i < dataLength; i++) {
              months.push(response[i]);
            }
          });
      }

      return months;
    },

    addEvent: function (monthID, dayID, eventData) {

      months[monthID].days[dayID].events.push(eventData);
    },

    saveEvent: function (monthID, dayID, eventID, eventData) {

      months[monthID].days[dayID].events[eventID] = eventData;
    },

    removeEvent: function (monthID, dayID, eventID) {

      months[monthID].days[dayID].events.splice(eventID, 1);
    },

    getFirstDayID: function (monthID) {
      var days = months[monthID].days;
      for (var i = 0, dayCount = days.length; i < dayCount; i++) {
        if (days[i].id === 1) {
          return i;
        }
      }
    }
  };

  }]);