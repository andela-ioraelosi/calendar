'use strict';

angular.module('event')
  .directive('monthExample', function () {
    return {
      restrict: 'EA',
      scope: {
        title: '@'
      },
      templateUrl: './app/event/partials/month.template.html',
      controller: null,
      link: function ($scope, element, attrs) {

      }
    };
  });