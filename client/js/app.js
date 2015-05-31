var app = angular.module('app', ['ui.router']);

app.controller('mainController', function($http, $scope) {
	$http.get('new.json')
		.success(function(data) {
			console.log(data);
			$scope.notes = data;
		});

	function saveToDB() {
		$http.post('/save_db', $scope.notes);
	}
	function editToggler() {
		$('.add-container textarea').slideToggle();
		$('.add-container button').toggleClass('show-for-sr');
	}
	
	$scope.editToggle = function() {
		editToggler();
	}

	$scope.addNote = function(note) {
		if(note) {
			$('.add-container textarea').val(note.content);
			note.editable = true;
			console.log(note);
		}
		editToggler();

	}
	$scope.removeNote = function(note) {
		$scope.notes.splice($scope.notes.indexOf(note), 1);
		saveToDB();
	}

	$scope.editNote = function(note) {
		$scope.addNote(note);
	}

	$scope.saveNote = function() {
		var cont = $('.add-container textarea').val();
		var editingNote = false;

		$scope.notes.forEach(function(e, i) {
			if(e.editable) {
				e.content = cont;
				e.editable = false;
				saveToDB();
				editingNote = true;
				editToggler();
				return;
			}
		});

		if(editingNote) return;

		var newNote = {};
		newNote.content = cont;
		$scope.notes.push(newNote);
		saveToDB();
		editToggler();
	}


});
