
/* global angular*/
var myFunc = myFunc || {};

(function () {
    "use strict";
        
    var app = angular.module('firstApp',[]);
    
    
    /*app.config(function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl: 'Home.html'
        })
        .otherwise('parent',{
             templateUrl: 'Parent.html'
        })
        .otherwise('child',{
             templateUrl: 'Child.html'
        });
    });
    */
    
    app.controller('firstController', function ($scope, $http) {
        var self = this;
        $scope.boolArray = [];
        for(var i=0; i < 10; i++){
            $scope.boolArray[i] = true;
        }
        
        $scope.show = false;
        $scope.pageName = "Main";
        $scope.firstName = "John";
        $scope.areaOfExp = "Papa";
        $scope.myArray = ["Java", ".Net", "Javascript"];
        
        
        $http.get("names.json").success(function (response) {
            $scope.names = response ? response.names : [];
            if($scope.names.length > 0){
                $scope.parentCount = $scope.names.length;
                console.log($scope.parentCount);
            }
        });
        
        
        $scope.loadPage = function(){
            console.log("--> load Page <--",        location.href);
            $scope.pageName = "";
            return "Home.html";
        };
        
        
       /* $scope.toggleChild = function($event){
          console.log("--> toggleChild <--", this, $event);
            jQuery('#' + $event).show();
             console.log($scope.boolArray[i]);
        };*/
        
        $scope.toggleState = function(index){
            $scope.boolArray[index] = !$scope.boolArray[index];
            console.log($scope.boolArray[index]);
        };
        
        $scope.addToMain = function () {
            var self = this;
            
            var currentName = $scope.areaOfExp;
            console.log("yes", currentName);
            if (currentName){
                console.log("yes", currentName);
                console.log("yes", $scope.names);
                $scope.names.push(
                                    {
                                        "parent": currentName,
                                        "child": []
                                  }
                );
            }       
        }
    });
}());


