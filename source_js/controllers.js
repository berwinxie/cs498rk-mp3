/* Sample Controller */

app.controller('galleryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {


  // $scope.classdata = {
  //   "title": "cs498rk",
  //   "names": ["abhi", "annie", "biplab", "devin", "jay", "sujay"]
  // };

  // $scope.change = function () {
  //   $scope.classdata.names.push($scope.inputVal);
  //   $scope.inputVal = "";
  // };

  // use this for getting image paths dynamically
  $scope.path = 'data/images/';
  $scope.rank = $routeParams.rank;

  // changing between movies from details view
  $scope.prev = function () {
    // $scope.rank = $scope.rank - 1;
    // if ($scope.rank < 0) { $scope.rank = 0; }
    return (parseInt($scope.rank) - 1 >= 0) ? parseInt($scope.rank) - 1 : 0;
  }
  $scope.next = function () {
    // $scope.rank = $scope.rank + 1;
    // if ($scope.rank >= $scope.movies.length) { $scope.rank = $scope.movies.length - 1; }
    return (parseInt($scope.rank) + 1 < 250) ? parseInt($scope.rank) + 1 : 249;
  }

  $http.get('data/imdb250.json').success(function (data) {
    $scope.movies = data;
    $scope.movie = $scope.movies[$scope.rank];
  }).error(function (err){
    console.log(err);
  });

}]);
