'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [
    {
      title: 'Inicio',
      state: 'main'
    }, {
      title: 'Favoritos',
      state: 'favs'
    }
  ];

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.pug'),
    controller: NavbarComponent
  })
  .name;
