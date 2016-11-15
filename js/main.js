var app = angular.module('app', ['ngRoute',"ngStorage"]);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'view/main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'viw/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            // .when('/contact', {
            //     templateUrl : 'pages/contact.html',
            //     controller  : 'contactController'
            // })
            .when('/bookmarks',{
              templateUrl:'view/bookmarks/main.html',
              controller:'bookmarksController'
            })
          	.when('/bookmarks/new',{
              templateUrl:'view/bookmarks/new.html',
              controller:'bookmarksController'
            })

            .when('/signup',{
              templateUrl:'view/user/signup.html',
              controller:'userController'
            })

            .when('/signin',{
              templateUrl:'view/user/signin.html',
              controller:'userController'
            })
          	.otherwise({redirectTo:'/'});
    });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope, TokenFactory) {
        // create a message to display in our view
        $scope.logout = function () {
          TokenFactory.setToken(undefined);
        };

        $scope.isLogged = function () {
          return TokenFactory.hasToken();
        };

    });

    app.factory('TokenFactory', function($localStorage){
    return {
        getToken: function(){
            return $localStorage.token;
        },
        setToken: function (token) {
           $localStorage.token =  token;
        },
        hasToken: function(){
          return $localStorage.token ? true: false ;
        }
    };
});

app.directive('confirmationNeeded', function () {
  return {
    priority: 1,
    terminal: true,
    link: function (scope, element, attr) {
      var msg = attr.confirmationNeeded || "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click',function () {
        if ( window.confirm(msg) ) {
          scope.$eval(clickAction);
        }
      });
    }
  };
});
