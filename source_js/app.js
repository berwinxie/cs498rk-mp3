var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/gallery', {
      templateUrl : 'partials/gallery.html',
      controller  : 'galleryController'
    })
    .when('/details/:rank', {
      templateUrl : 'partials/details.html',
      controller  : 'galleryController'
    })
    .when('/list', {
      templateUrl : 'partials/list.html',
      controller  : 'galleryController'
    })
    .otherwise({
      redirectTo: '/gallery'
    });
})
