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

})(typeof exports === 'undefined'?this:global);
