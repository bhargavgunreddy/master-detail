
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
        $scope.parentScope = {};
        $scope.parentScope.DUPLICATEPARENT = false;
        
        $http.get("names.json").success(function (response) {
            // Populate names
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
        
        
       /* --- Add children to parent --- */
        
        $scope.addChild = function(index){
          console.log("--> addChild <--", $scope);
          var currentObj = ($scope.names)[index];
          console.log("--> currentObj <--", currentObj);
            var childArr = currentObj.child;
            var tempObj = {
                "name" : $scope.parentScope.childFirstName ,
                "surname": $scope.parentScope.childSurName
            };
            childArr.push(tempObj);
            currentObj.child = childArr;
            ($scope.names)[index] = currentObj;
        };
        
        /* --- Toggle upon click based on current state --- */
        $scope.toggleState = function(index){
            console.log("init--->", $scope.boolArray[index]);
            $scope.boolArray[index] = !$scope.boolArray[index];
            console.log("final--->",$scope.boolArray[index]);
        };
        
        /* Handle current toggle state of each node in boolean value */
        $scope.getBoolVal = function(index){
            console.log("getBoolVal--->",$scope.boolArray[index]);
            return $scope.boolArray[index];
        }
        
        $scope.showError = function(){
            return $scope.parentScope.DUPLICATEPARENT;
        }
        
        /* Add parent */
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


