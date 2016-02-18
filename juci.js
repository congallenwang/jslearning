(function(scope){

    function JUCIMain()
    {
        console.log("call jucimain constructor");
    }

    JUCIMain.prototype.$init= function(name,age){
        var $uci = scope.$uci;

        this.name = name;
        this.age = age;    
        $uci.$init(age);
    }

    JUCIMain.prototype.$getname=function(){
        return this.name;
    }

    JUCIMain.prototype.$getage=function(){
        return this.age;
    }

    JUCIMain.prototype.$getconfig=function(){
        //console.log(scope);
        var uci = scope.$uci;
        
        console.log(uci);
    }

    scope.JUCI = scope.$juci = new JUCIMain();
   
    var app= scope.JUCI.app = angular.module("myapp",[],function(){ });   

                app.controller("ctr1",function($scope){
                    
                    $scope.num = 1;

                    $scope.onc=function(index)
                    {
                        $scope.num=index;
                        console.log($scope);
                    }
                
                });
               
		app.run(function(){
			console.log("angular run main");
		});
 
                angular.element(document).ready(function(){
                        console.log("document ready");
                        window.$juci.$init('alan',35);
                        angular.bootstrap(document,['myapp']);
                });
	

})(typeof exports === 'undefined'?this:global);
