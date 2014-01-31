var rovarApp = angular.module('rovarApp',[]);

rovarApp.controller('rovarCtrl', function($scope) {
	$scope.row = 4;
	$scope.cols = 50;
	
	$scope.convert = function(text) {
		var kons = "bcdfghjklmnpqrstvwxz";		
		var textList = text.split("");
		
		for(var t in textList) 
		{
			if (kons.search(textList[t]) !== -1)
			{
				textList[t] = textList[t] + 'o' + textList[t];
			}
			
		}
		text = textList.join("");
		$scope.text = text;
		
		return text;

	}
});
