'use strict';

import { ApiService } from './Api.service';

export default angular.module('rtc.Api', [])
  .factory('Api', ApiService)
  .name;
