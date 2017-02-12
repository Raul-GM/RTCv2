'use strict';

function Config() {
  this.back = '/api/';
  return{
    back: this.back
  };
}

export default angular.module('rtc.Config', [])
  .service('Config', Config)
  .name;
