
function route($routeProvider){
	$routeProvider
        .when('/',{
            templateUrl:'view/NewTrends.html',
            controller:'luyou'
        }) 
        .when('/jianjie',{
            templateUrl:'view/Introduction.html',
            controller:'luyou'
        })
        .when('/xinxi',{
            templateUrl:'view/Message.html',
            controller:'luyou'
        })
        .when('/caozuo',{
            //templateUrl:'',
        })
        .when('/lanmu',{
            //templateUrl:'',
        })
        .when('/more',{
            //templateUrl:'',
        })
        .otherwise({redirectTo:'/'});
}
