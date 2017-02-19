'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class DateCardComponent {
  /*@ngInject*/
  constructor() {
    this.formatedDate = {
      day: 0,
      month: '',
      year: '',
      dayOfWeek: ''
    };
  }

  $onInit() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let date = new Date(this.date);
    this.formatedDate.day = date.getDate();
    this.formatedDate.month = months[date.getMonth()];
    this.formatedDate.year = date.getFullYear();
    this.formatedDate.dayOfWeek = days[date.getDay()];
  }
}

export default angular.module('directives.dateCardItem', [])
  .component('dateCardItem', {
    template: require('./date-card.pug'),
    bindings: {
      date: '=',
    },
    controller: DateCardComponent
  })
  .name;
