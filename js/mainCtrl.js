var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService){
	$scope.queue = [];
	var getParseData = function(){
		parseService.getQ().
			then(function(data){
				$scope.queue = data;
			});
	}
	getParseData();

	$scope.postQuestion = function(){
		parseService.postQ($scope.question).
			then(function(){
				getParseData();
				$scope.question = '';
			});
	}

	$scope.escalate = function(){
		parseService.escalate(this.q).
			then(function(){
				getParseData();
			});
	}

	$scope.delFromQ = function(){
		parseService.delFromQ(this.q).
			then(function(){
				getParseData();
			})
	}


});