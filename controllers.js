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


$scope.getScreenname = function(screenname){
	//console.log(screenname);
}    

/*
$scope.save = function(){

}    
*/

}]);