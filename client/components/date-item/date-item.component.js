'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class DateItemComponent {

}

export default angular.module('directives.dateItem', [])
  .component('dateItem', {
    template: require('./date-item.pug'),
    bindings: {
      date: '=',
    },
    controller: DateItemComponent
  })
  .name;
