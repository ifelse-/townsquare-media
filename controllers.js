//CONTROLLER	
townSquareApp.controller('settingController', ['$scope', '$http',  function($scope, $http){

 $http.get('assets/json/socialmedia.json')
	       .then(function(res){
	          $scope.socialmedia = res.data;                
	       });

$scope.iconColor;
$scope.screenname;





$scope.changeSocialColor = function (value) {
        //alert(value);
        if(value === 2){
        	$scope.iconColor = "default";
        } else {
        	$scope.iconColor = "fullColor";
        }
    }

/*
$scope.getScreenname = function(screenname){
	//console.log(screenname);
} 
*/   

/* Need more time to think this logic through
$scope.save = function(){

$scope.socialMediaObj = {}
$scope.socialMediaArr = []	

  var elements = document.getElementById("social-form-info").elements;

	for (var i = 0, element; element = elements[i++];) {
	    if (element.value !== "" && element.id !== ""){

	    	$scope.socialMediaObj = {
					name:"",
					url:null
				}

	    		$scope.socialMediaObj.name = element.id,
	    		$scope.socialMediaObj.url = element.value

             //console.log('element.value ' + element.value)
	         //console.log('element.id ' +element.id)
	         $scope.socialMediaArr.push($scope.socialMediaObj);
	    }
	}

	//console.log($scope.socialMediaArr);
	$scope.socialMediaUrls = $scope.socialMediaArr;
}   
*/ 


}]);