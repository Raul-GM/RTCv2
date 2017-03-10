'use strict';
/* eslint no-sync: 0 */
import angular from 'angular';

export default angular.module('rtcApp.util').filter('capitalize', ()=> {
    return function(str) {
      // return input.replace(/\b\w/g, l => l.toUpperCase());
      let splitStr = str.toLowerCase().split(' ');
      for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    };
});

