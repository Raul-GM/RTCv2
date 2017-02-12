import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
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

export default angular.module('rtcApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.pug'),
    controller: MainController
  })
  .name;
