!function(){"use strict";function RebootModal($state,$scope,$rootScope,$modal,$modalInstance,systemService){function reAuthenticate(){$modalInstance.close(),sessionStorage.clear(),$state.go("login")}var vm=this;$rootScope.currentState=$state.current.name,vm.reboot=function(){systemService.reboot().then(function(){var tmpScope=$rootScope.$new();tmpScope.reAuthenticate=reAuthenticate,sessionStorage.clear(),$modalInstance.close(),$modalInstance=$modal.open({templateUrl:"app/layout/rebootSuccessModal.html",scope:tmpScope,backdrop:"static",keyboard:!1})}).catch(function(error){console.warn("Error message: "+error.message);var tmpScope=$rootScope.$new();tmpScope.errorMessage=error.message,$modalInstance.close(),$modalInstance=$modal.open({templateUrl:"app/layout/rebootFailureModal.html",controller:"RebootModal as vm",scope:tmpScope,backdrop:"static",keyboard:!1})})},vm.closeModal=function(){$modalInstance.close()}}angular.module("app.rebootModal").controller("RebootModal",RebootModal),RebootModal.$inject=["$state","$scope","$rootScope","$modal","$modalInstance","systemService"]}();