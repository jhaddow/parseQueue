var app = angular.module('parseQ');

app.service('parseService', function($http, $q){
	var url = 'https://api.parse.com/1/classes/q';
	this.postQ = function(question){
		var data = {};
		data.question = question;
		data.status = 'red';
		return $http.post(url, data);
	}

	this.getQ = function(){
		var deferred = $q.defer();
		$http.get(url + '?order=createdAt').
			then(function(data){

				deferred.resolve(data.data.results);
			});
		return deferred.promise;
	};

	this.escalate = function(questionObj){
		questionObj.status = 'yellow';
		return $http.put(url + '/' + questionObj.objectId, {status: questionObj.status});
	};

	this.delFromQ = function(questionObj){
		return $http.delete(url + '/' + questionObj.objectId);

	};
});