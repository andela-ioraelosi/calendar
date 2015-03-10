angular.module('event')
  .factory('MonthService', ['$http', '$q', function ($http, $q) {

  var service = {};
  var months = [];
  service.getMonths = function () {
    var monthsDefer = $q.defer();
    if (months.length > 0) {
      monthsDefer.resolve(months);
    } else {
      $http.get('./data/events.json').success(function (data) {
        months = data;
        monthsDefer.resolve(data);
      });
    }

    return monthsDefer.promise;
  };

  return service;

  }]);