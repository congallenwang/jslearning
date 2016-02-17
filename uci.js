(function(scope){
    function UCI()
    {
        console.log("call uci constructor");
    }

    tCI.prototype.$init = function(config){
        this.config = config;
    }

    UCI.prototype.$getconfig = function(){
        return this.config;
    }
    scope.UCI = scope.$uci = new UCI();
})(typeof exports === 'undefined'? this : global);
