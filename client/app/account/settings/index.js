'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('rtcApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
