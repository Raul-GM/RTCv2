'use strict';

import { AdminService } from './Admin.service';

export default angular.module('rtcApp.Admin', [])
  .factory('Admin', AdminService)
  .name;
