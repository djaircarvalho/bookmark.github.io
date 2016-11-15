app.service('bookmarkService', function($http, TokenFactory) {

    var baseUrl = 'https://secure-sands-90419.herokuapp.com/bookmarks/';
    var config = {
      headers: {"Content-Type": "application/json", "Accept": "application/json",
      "Authorization":TokenFactory.getToken()
      }
    };

    this.getAll = function () {
        return $http.get(baseUrl, config);
    };

    this.post = function (data){
      return $http.post(baseUrl, data, config);
    };

    this.delete = function(id) {
      var url = baseUrl + id;
      return $http.delete(url, config);
    };
});
