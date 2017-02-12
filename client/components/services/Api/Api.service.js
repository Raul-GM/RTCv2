'use strict';

export function ApiService($http,$q, Config) {
  'ngInject';

  let cleanUri = function(uri){
    if(uri.substr(0,1) === '/'){
      uri = uri.substr(1);
    }
    return Config.back+uri;
  };

  let getQuery = function(params){
    let str = '?';
    for(let i in params){
      str+=('&'+i+'='+params[i]);
    }
    return str;
  };

  let Api = {
    request(endpoint,params,options,data){
      return $q(function(resolve,reject){
        if(!options){
          options = {
            method : 'GET'
          };
        }
        endpoint = cleanUri(endpoint);
        if(params){
          endpoint+= getQuery(params);
        }
        if(data){
          options.data = data;
        }
        options.url = endpoint;
        $http(options).then(function(r){
          resolve((r.data.data || r.data));
        },function(e){
          reject(e.data);
        });
      });
    }
  };

  return Api;
}
