var app = angular.module("app.Triplace", []);
app.factory('sharedService', function ($http) {

    var data = {
        FirstName: ''
    };
    var user = {
        firstName: '',
        lastName: '',
        id: '',
        email: 'kobi@kobi.com'
    }

    return {
        getUser: function () {
            return user;
        },
        setUser: function (user) {
            $scope.user = user;
        },
        useGet: function (path,params,callbackFunc) {
            $http({
                method: 'GET',
                url: path,
                params: params
                //headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
            }).success(function(data){
                // With the data succesfully returned, call our callback
                callbackFunc(data);
            }).error(function(){
                alert("error");
            });
        }
    }

});
