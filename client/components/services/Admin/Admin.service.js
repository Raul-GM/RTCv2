'use strict';

export function AdminService(Api) {
  'ngInject';

  let $this = this;
  $this.Api = Api;

  let Admin = {
    loadDates() {
      console.log('SERVICEEEEEEEEEE << ---------------------- ')
      return $this.Api.request('/date/load');
    },
    cleanAllDates() {
      return $this.Api.request('/date/', false, {method: 'DELETE'}, {});
    },
    getAllDates() {
      console.log('----------------------->')
      return $this.Api.request('/date');
    }
  };

  return Admin;
}
