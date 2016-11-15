app.controller('bookmarksController', function ($http, $scope, bookmarkService) {

  $scope.bookmarks = [];

  var load = function () {
    bookmarkService.getAll()
      .then(function(response) {
        $scope.bookmarks = response.data;
      }, function(err) {
        console.log(err);
      });
  } ;

  $scope.addBookmark = function () {
    data = { bookmark:  $scope.bookmark   };
      bookmarkService.post(data)
          .success(function (data, status, headers, config) {
            $scope.success = true;
            $scope.bookmark = {};
          })
          .error(function (data, status, header, config) {
            $scope.error = data.error;
          });
  };
  $scope.removeBookmark = function (id) {
    bookmarkService.delete(id)
     .then(
         function(response){
         load();
         },
         function(response){
           console.log("fail");
         }
      );
  };

  load();

});
