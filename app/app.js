(function () {
  'use strict';

  var app = angular.module('app', [
    'event',
    'ngMaterial'
  ])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('light-blue');
  });

}());