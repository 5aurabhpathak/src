!function(){"use strict";function Accounts($state,$scope,$rootScope,$http,$modal,accountsService){var vm=this;$rootScope.currentState=$state.current.name,vm.validation=/^[^\/|~<>;\\\\'\"]{1,20}$/,vm.currentUsers=accountsService.getCurrentUsers(),vm.openAddAccount=function(){accountsService.addOrEdit="Add";$modal.open({templateUrl:"app/accountModals/editAccountModal.html",controller:"EditAccountModal as vm",scope:$scope})},vm.openEditAccount=function(selectedUser){accountsService.addOrEdit="Edit",accountsService.selectedUser=selectedUser;$modal.open({templateUrl:"app/accountModals/editAccountModal.html",controller:"EditAccountModal as vm",scope:$scope})},vm.openDeleteAccount=function(selectedUser){accountsService.selectedUser=selectedUser;$modal.open({templateUrl:"app/accountModals/deleteAccountModal.html",controller:"DeleteAccountModal as vm",scope:$scope})},vm.restoreUsersFromBackup=function(){console.log("Restore users from backup here.")}}angular.module("app.accounts").controller("Accounts",Accounts),Accounts.$inject=["$state","$scope","$rootScope","$http","$modal","accountsService"]}();