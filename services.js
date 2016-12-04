//SERVICE
townSquareApp.factory('socialMediaData', function ($http) {
  return $http.get('assets/json/socialmedia.json', { cache: true });
});


townSquareApp.factory('contactData', function ($http) {
  return $http.get('assets/json/contacts.json', { cache: true });
});

