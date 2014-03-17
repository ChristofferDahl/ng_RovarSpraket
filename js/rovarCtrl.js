var rovarApp = angular.module('rovarApp',[]);

rovarApp.controller('rovarCtrl', function($scope) {
	//Set the params for the text areas
	$scope.row = 4;
	$scope.cols = 50;
	
	
	//Converts the text to robber language
	$scope.convert = function(text) {
		var kons = "bcdfghjklmnpqrstvwxz";		
		var textList = text.split("");
		
		for(var t in textList) 
		{
			if (kons.indexOf(textList[t].toLowerCase()) !== -1)
			{
				textList[t] = textList[t] + 'o' + textList[t].toLowerCase();
			}
			
		}
		text = textList.join("");
		$scope.text = text;
		
		return text;

	}
});

