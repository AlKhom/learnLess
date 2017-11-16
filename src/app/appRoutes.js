app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login',
            {
                templateUrl: 'src/login/login.html',
                controller: 'loginController',
                controllerAs: 'vm',
                url: '/login'

            })
        .state('home',
            {
                templateUrl: 'src/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm',
                url: '/home'

            })
        .state('details',
            {
                templateUrl: 'src/details/details.html',
                controller: 'detailsController',
                controllerAs: 'vm',
                url: '/details'
            });

    $urlRouterProvider.otherwise('/home');
});