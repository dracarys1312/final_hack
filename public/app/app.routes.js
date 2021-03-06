angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

    $routeProvider
    // route for the home page
        .when('/', {
        templateUrl: 'app/views/pages/home.html'
        })

        .when('/register', {
            templateUrl: 'app/views/pages/users/register.html',
            controller: 'userRegisterController',
            controllerAs: 'user'
        })

    // login page
        .when('/login', {
            templateUrl: 'app/views/pages/login.html',
            controller: 'mainController',
            controllerAs: 'login'
        })
        //
        // .when('/register', {
        //     templateUrl: 'app/views/pages/users/register.html',
        //     controller: 'userRegisterController',
        //     controllerAs: 'user'
        // })

    // show all users
    .when('/users', {
        templateUrl: 'app/views/pages/users/all.html',
        controller: 'userController',
        controllerAs: 'user'
    })

    // form to create a new user
    // same view as edit page
    // .when('/users/create', {
    //     templateUrl: 'app/views/pages/users/single.html',
    //     controller: 'userCreateController',
    //     controllerAs: 'user'
    // })
    //
    // .when('/users/:user_id', {
    //         templateUrl: 'app/views/pages/users/single.html',
    //         controller: 'userEditController',
    //         controllerAs: 'user'
    //     })
    $locationProvider.html5Mode(true);

});
