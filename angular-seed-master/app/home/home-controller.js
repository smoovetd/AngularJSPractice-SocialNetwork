angular.module('socialNetwork.home',[])
    .config(['$routeProvider',function homeFunction($routeProvider){
        $routeProvider.when('/',{
            templateUrl: 'app/home/home.html',
            controller: 'homeController'
        });
    }])

    .controller('homeController',['$scope',function($scope){
        $scope.hello = "Bonjorno mada faka";
    }]);