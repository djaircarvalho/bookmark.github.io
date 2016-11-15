app.service('userService', function($http) {
  var baseUrl = 'https://secure-sands-90419.herokuapp.com/';
  var config = {
      headers: { "Content-Type": "application/json", "Accept": "application/json" }
    };

  this.signup = function (user) {
    var url = baseUrl + "signup";
    return $http.post(url, user, config);
  } ;

  this.signin = function (user) {
    var url = baseUrl + "authenticate";
    return $http.post(url, user, config);
  };
});
