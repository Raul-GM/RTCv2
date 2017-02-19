'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';

// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import listDates from '../components/list-dates/list-dates.component';
import dateItem from '../components/date-item/date-item.component';
import dateCard from '../components/date-card/date-card.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import Admin from '../components/services/Admin/Admin.module';
import Api from '../components/services/Api/Api.module';
import Config from '../components/services/Config/Config.service';

import './app.css';

angular.module('rtcApp', [ngCookies, ngResource, ngSanitize, uiRouter, _Auth, account, admin,
  navbar, footer, main, constants, util, listDates, dateItem, dateCard,
  Api, Config, Admin
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['rtcApp'], {
      strictDi: true
    });
  });
