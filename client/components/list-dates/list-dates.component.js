'use strict';

import angular from 'angular';

export class ListDatesComponent {
  /*@ngInject*/
  constructor(Admin) {
    this.Admin = Admin;
    this.dates = [];
  }

  $onInit() {
    let $this = this;
    $this.Admin.getAllDates().then((dates)=>{
      $this.dates = dates;
    });
  }
}

export default angular.module('directives.listDates', [])
  .component('listDates', {
    template: require('./list-dates.pug'),
    controller: ListDatesComponent
  })
  .name;
