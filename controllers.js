//CONTROLLER	
townSquareApp.controller('settingController', ['$scope', 'socialMediaData', 'contactData',  function($scope, socialMediaData, contactData){

/*
 $http.get('assets/json/socialmedia.json')
	       .then(function(res){
	          $scope.socialmedia = res.data;    
	       });


 $http.get('assets/json/contacts.json')
	       .then(function(contact){
	          $scope.contacts = contact.data;  

	       });

*/


socialMediaData.then(function(res){
	  $scope.socialmedia = res.data;    
  });

contactData.then(function(contact){
	  $scope.contacts = contact.data;  
   });

$scope.iconColor = false;
$scope.showSocialUrl = false;

/************** Contact Page ***************/
$scope.editedContacts = {};
$scope.editedContacts.state = "Choose a state";

$scope.updateInfo = false;
$scope.hideRemoveContact = false;

$scope.primary = false;


$scope.addContact = function(){
     $scope.contacts.push({
              contactName:$scope.editedContacts.contactName,
              addressline1:$scope.editedContacts.addressline1,
              addressline2:$scope.editedContacts.addressline2,
              city:$scope.editedContacts.city,
              state:$scope.editedContacts.state,
              zipcode:$scope.editedContacts.zipcode,
              phoneName:$scope.editedContacts.phoneName,
              phoneNumber:$scope.editedContacts.phoneNumber,
              primary:false,
              selected:false

        });

    $scope.main.contactPage = 'mycontact';
}

$scope.editContact = function($index) {
	 $scope.$index = $index;

	 if($scope.contacts.length === 1){
	 	$scope.hideRemoveContact = true;
	 }

	 //$scope.$index;
	 angular.copy($scope.contacts[$index], $scope.editedContacts);
	 //console.log($scope.editedContacts);
	 $scope.updateInfo = true;
	 $scope.main.contactPage = 'contact';

}

$scope.updateContact = function(){
	 angular.copy($scope.editedContacts, $scope.contacts[$scope.$index]) 
     $scope.main.contactPage = 'mycontact';
}

$scope.removeContact = function($index){
	 $scope.contacts.splice($index,1);
	 $scope.main.contactPage = 'mycontact';
}

$scope.addNewContact = function() {
	$scope.updateInfo = false;
	$scope.editedContacts = {
              contactName:"",
              addressline1:"",
              addressline2:"",
              city:"",
              state:"Choose a state",
              zipcode:"",
              phoneName:"",
              phoneNumber:"",
              primary:false,
              selected:false
        };
	$scope.main.contactPage = 'contact';
}


$scope.oldvalue = []

$scope.primaryCheck = function($index) {
	//$scope.primary = false;
	
    for(i=0; 1<$scope.contacts.length; i++){
    	$scope.contacts[i].primary = false;
    	$scope.contacts[$index].primary = true;
    }

}


/************** Contact Page Ends **************/



//Change icon color
$scope.changeSocialColor = function (value) {        
        if(value === 2){
        	$scope.iconColor = false;
        } else {
        	$scope.iconColor = true;
        }
        
    }


//Save social media urls
$scope.saveSocialMedia = function(){

$scope.socialMediaObj = {}
$scope.socialMediaArr = []	
$scope.showSocialUrl = true;


  var elements = document.getElementById("social-form-info").elements;

	for (var i = 0, element; element = elements[i++];) {
	    if (element.value !== "" && element.id !== ""){

	    	$scope.socialMediaObj = {
					socialUrl:null,
					userUrl:null
				}

	    		$scope.socialMediaObj.socialUrl = element.id,
	    		$scope.socialMediaObj.userUrl = element.value

             //console.log('element.value ' + element.value)
	         //console.log('element.id ' +element.id)
	         $scope.socialMediaArr.push($scope.socialMediaObj);
	    }
	}

	//console.log($scope.socialMediaArr);
	$scope.socialMediaUrls = $scope.socialMediaArr;
}   


}]);