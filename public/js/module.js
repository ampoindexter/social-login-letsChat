'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})
    
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})

    $authProvider.github({
      clientId: 'a91cc25c9e7e4920f13a'
    });
    $authProvider.google({
      clientId: '273183779465-d9nd09lo2df7iqt2ldg0fj86ckt955jj.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '1668844963358370'
    });

    $authProvider.twitter();
});
