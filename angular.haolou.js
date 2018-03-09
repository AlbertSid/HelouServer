var HaoLouApp = angular.module('HaoLouApp', ['ui.router']);
HaoLouApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/personalData');
    $stateProvider
        .state('personalData', {
            url: '/personalData',
            templateUrl: 'views/personalData.html'
        })
        .state('personalDataSet', {
            url: '/personalDataSet',
            templateUrl: 'views/personalData-Set.html'
        })
        .state('help', {
            url: '/help',
            templateUrl: 'views/help.html'
        })
        .state('Housing-add', {
            url: '/Housing-add',
            templateUrl: 'views/Housing-add.html'
        })
        .state('Housing-list', {
            url: '/Housing-list',
            templateUrl: 'views/Housing-list.html'
        })
        .state('Property-list', {
            url: '/Property-list',
            templateUrl: 'views/Property-list.html'
        })
        .state('Property-picture', {
            url: '/Property-picture',
            templateUrl: 'views/Property-picture.html'
        })
        .state('Property-add', {
            url: '/Property-add',
            templateUrl: 'views/Property-add.html'
        })
        .state('Company-list', {
            url: '/Company-list',
            templateUrl: 'views/Company-list.html'
        })
        .state('Company-add', {
            url: '/Company-add',
            templateUrl: 'views/Company-add.html'
        })
        .state('Brokers-list', {
            url: '/Brokers-list',
            templateUrl: 'views/Brokers-list.html'
        })
        .state('Brokers-add', {
            url: '/Brokers-add',
            templateUrl: 'views/Brokers-add.html'
        })
        .state('advertisement-list', {
            url: '/advertisement-list',
            templateUrl: 'views/advertisement-list.html'
        })
        .state('advertisement-Set', {
            url: '/advertisement-Set',
            templateUrl: 'views/advertisement-Set.html'
        })
        .state('advertisement-picture', {
            url: '/advertisement-picture',
            templateUrl: 'views/advertisement-picture.html'
        })
        .state('invoice', {
            url: '/invoice',
            templateUrl: 'views/invoice.html'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin.html'
        })
});