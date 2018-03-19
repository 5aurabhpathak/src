!function(){"use strict";function Layout($state,$scope,$rootScope,$timeout,systemService,$modal,GatewayTime,webService,authenticationService,updateDeviceService,$window){function updateTimeout(){$timeout(function(){vm.currentTime=moment(vm.currentTime).add(1,"seconds").format("MM/DD/YYYY h:mm:ss A z"),updateTimeout()},1e3)}var vm=this;vm.currentTime=null!=GatewayTime?GatewayTime:moment().format("MM/DD/YYYY h:mm:ss A z"),$rootScope.currentState=$state.current.name,vm.username=$rootScope.username,vm.openRebootModal=function(){$modal.open({templateUrl:"app/layout/rebootModal.html",controller:"RebootModal as vm",scope:$scope})},vm.logout=function(){1==$rootScope.logoutSuccess?updateDeviceService.logout().then(function(){authenticationService.logout().then(function(){sessionStorage.clear(),$state.go("login")})}):authenticationService.logout().then(function(){sessionStorage.clear(),$state.go("login")})},vm.getSystemTime=function(){systemService.getSystemTime().then(function(timeObject){vm.currentTime=moment(timeObject.time).format("MM/DD/YYYY h:mm:ss A z")})},updateTimeout(),$scope.$on("gatewayTimeUpdated",function(){console.log("Layout::$scope.$on('gatewayTimeUpdated') - Gateway time updated"),vm.getSystemTime()}),$scope.$on("onBeforeUnload",function(e){console.log("Logging out"),vm.logout(),e.preventDefault()})}angular.module("app.layout").controller("Layout",Layout),Layout.$inject=["$state","$scope","$rootScope","$timeout","systemService","$modal","GatewayTime","webService","authenticationService","updateDeviceService","$window"]}();