/* Sample Controller */

app.controller('galleryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $scope.filterBy = { };
  $scope.predicate = 'rank';
  $scope.changeGenre = function (input) {
    if (input == 'All') {
      // wut
      input = '';
    }
    $scope.filterBy = {'genre' : input}
  }
  // $scope.change = function () {
  //   $scope.classdata.names.push($scope.inputVal);
  //   $scope.inputVal = "";
  // };

  // use this for getting image paths dynamically
  $scope.path = 'data/images/';
  $scope.rank = $routeParams.rank;
  $scope.genres = ['All', 'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western']



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
