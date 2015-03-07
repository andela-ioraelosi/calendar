angular.module('event')
  .factory('EventService', ['$http', function ($http) {

    return {
      getEvents: function () {
        return $http.get('./data/events.json');
      },

      addEvent: function (event) {
        return $http.post('./data/events.json', event);
      }
    };
  }]);