'use strict';
/* eslint no-sync: 0 */
import angular from 'angular';

export default angular.module('rtcApp.util').filter('cutString', ()=> {
  return function(input) {
    return input.substr(0,3);
  };
});

