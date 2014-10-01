var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'JZWuzrifIQ46APgA2FvEtmDXYnefLdNpFABmwlY0', 'X-Parse-REST-API-Key': 'NCftHxpkXTxatMwW3c3XplseC3MD9N9p3RzeImNn'}
          return config;
        }
      };
    });