'use strict';
/* eslint no-sync: 0 */
import angular from 'angular';

export default angular.module('rtcApp.util').filter('toDayOfWeek', ()=> {
  return function(input) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let date = new Date(input);
    return days[date.getDay()];
  };
});

