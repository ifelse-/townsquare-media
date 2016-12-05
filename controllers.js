//CONTROLLER	
townSquareApp.controller('settingController', ['$scope', '$timeout', 'socialMediaData', 'contactData',  function($scope, $timeout, socialMediaData, contactData){

$scope.iconColor = false;
$scope.showSocialUrl = false;


/************** Data ***************/

socialMediaData.then(function(res){
	  $scope.socialmedia = res.data;    
  });

contactData.then(function(contact){
	  $scope.contacts = contact.data;  
   });

/************** Data End ***************/



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
    callAlertMsg("New contact added successfully")
    
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
     callAlertMsg("Updated contact successfully")
}

$scope.removeContact = function($index){
	 $scope.contacts.splice($index,1);
	 $scope.main.contactPage = 'mycontact';
	 callAlertMsg("Removed contact successfully")
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


$scope.primaryCheck = function($index) {
	//$scope.primary = false;
	
    for(i=0; 1<$scope.contacts.length; i++){
    	$scope.contacts[i].primary = false;
    	$scope.contacts[$index].primary = true;
    }

}


/************** Contact Page Ends **************/



/************** Site Info ***************/


//Change social media icons to full color
$scope.changeSocialColor = function (value) {        
        if(value === 2){
        	$scope.iconColor = false;
        } else {
        	$scope.iconColor = true;
        }
        
    }


//Save social media sites
$scope.saveSocialMedia = function(){


$scope.socialMediaIdArr = [];
$scope.socialMediaValueArr = [];
$scope.socialMediaArr = [];
$scope.socialMediaObj = {}
$scope.showPreviewSection === false;


  var elements = document.getElementById("social-form-info").elements;

	for (var i = 0, element; element = elements[i++];) {
	    if (element.value !== "" && element.id !== ""){

            $scope.showPreviewSection = true;
	    	$scope.socialMediaIdArr.push(element.id);
	    	$scope.socialMediaValueArr.push(element.value);

	    }
	}

	for (i = 0; i < $scope.socialMediaIdArr.length; i++) {
    
		$scope.socialMediaObj = {
					icon:null,
					iconColor:null,
					name:null,
					url:null,
					link:null
				}


		$scope.socialMediaObj.icon = $scope.socialmedia[$scope.socialMediaIdArr[i]].icon;
		$scope.socialMediaObj.iconColor = $scope.socialmedia[$scope.socialMediaIdArr[i]].color;		
		$scope.socialMediaObj.name = $scope.socialmedia[$scope.socialMediaIdArr[i]].name;
		$scope.socialMediaObj.url = $scope.socialmedia[$scope.socialMediaIdArr[i]].url;
	    $scope.socialMediaObj.link = $scope.socialMediaValueArr[i]; 		
       	$scope.socialMediaArr.push($scope.socialMediaObj);

    }

        //console.log($scope.socialMediaArr);
     	$scope.socialMediaPreview = $scope.socialMediaArr;


     	if($scope.showPreviewSection === true){
		 callAlertMsg("Scroll down to preview your social media sites below")
     	}

}   
/************** Site Info End ***************/

/************** Animation ***************/

function callAlertMsg(msg){
	$scope.animate = "fade-in";
	$scope.alertMsg = msg;
	$timeout(function () {
	     $scope.animate = "fade-out"
	   }, 5000);
}

/************** Animation ***************/


}]);

