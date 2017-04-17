'use strict';
backMe.controller('createprojectinfoCtrl', ['$scope', 'BaseServices', '$timeout', function(_scope, _services, _timeout){
	_scope.step = 1;
	_scope.stepsTitle = "Enter Basic Project Information:";
	_scope.cityList = [
		  {
			  'state': 'KA',
			  'city': 'Banglore',
		  },
		  {
			  'state': 'KA',
			  'city': 'Mysore',
		  },
		  {
			  'state': 'TN',
			  'city': 'Chennai',
		  },
		  {
			  'state': 'TN',
			  'city': 'Coimbatore',
		  }
	];
	_scope.categoryList = [
		  {
			  'name': 'Signer'
		  },
		  {
			  'name': 'Drama'
		  },
		  {
			  'name': 'Music'
		  },
		  {
			  'name': 'Test'
		  }
	];
	
}]);