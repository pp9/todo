var app = angular.module('app', ['ui.router']);




app.controller('mainController', function($http, $scope) {
	$http.get('db.json')
		.success(function(data) {
			console.log(data);
			$scope.notes = data;
		});

	$scope.addNote = function() {
		$('.add-container textarea').show();
		$('#save-note').removeClass('show-for-sr');
	}
	$scope.saveNote = function() {
		var newNote = {
			"id": "04", 
			"name": "Note 4",
		}
		newNote.content = $('.add-container textarea').val();
		$scope.notes.push(newNote);
	}


});
