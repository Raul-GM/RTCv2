'use strict';
/* eslint no-sync: 0 */
import angular from 'angular';

export default angular.module('rtcApp.util').filter('firstLetterUpper', ()=> {
  return function(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});

