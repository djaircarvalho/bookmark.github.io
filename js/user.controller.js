app.controller('userController', function ( $scope, $http, userService, TokenFactory, $location  ) {
  console.log(TokenFactory.getToken());
  $scope.signup = function () {
    var data = { user:$scope.user};

    userService.signup(data)
          .success(function (data, status, headers, config) {
            $scope.user.error = "";
            $location.path('/signin');
            console.log(data);
          })
          .error(function (data, status, header, config) {
            $scope.user.error = data;
            $scope.user.password = "";
            $scope.user.password_confirmation = "";
            console.log(data);
          });

      console.log($scope.user.error);
      console.log("up");
  };

  $scope.signin = function () {
    var data = $scope.user;
    userService.signin(data)
          .success(function (data, status, headers, config) {
            var token = data.auth_token;
            TokenFactory.setToken(token);
            $location.path('/bookmarks');
          })
          .error(function (data, status, header, config) {
            $scope.user.error = data.error;
            $scope.user.password = "";
            console.log(data.error);
          });

      console.log("in");
  };

  $scope.logout = function () {
      console.log("out");
  };

});
