angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$http,$interval) {
  console.log("i am playlist");
  
  var currdate = new Date();
  $scope.title = currdate;
  $interval(function(){
    currdate = new Date();
    $scope.title = currdate;
    $scope.title = $scope.title.toLocaleTimeString('en-US');
    
    var d=new Date("2016-12-23 03:36:50 PM");
    var difference = currdate.getTime()-d.getTime()
    console.log(currdate.getTime()-d.getTime());
    if(difference > 0)
    {
      //document.write(d.getTime() + " milliseconds since 1970/01/01"+ "----" + $scope.title + "----" + $scope.title+"---");
    }
  }, 1000)
  
  /*$scope.title = window.localStorage.getItem("title");
  if($scope.title === null){$scope.title = 'Navin IOT';}*/
  
  $scope.headingone = window.localStorage.getItem("headingone");  
  if($scope.headingone === null){$scope.headingone = 'Switch One';}

  $scope.headingtwo = window.localStorage.getItem("headingtwo");  
  if($scope.headingtwo === null){$scope.headingtwo = 'Switch Two';}

  $scope.headingthree = window.localStorage.getItem("headingthree");  
  if($scope.headingthree === null){$scope.headingthree = 'Switch Three';}

  $scope.headingfour = window.localStorage.getItem("headingfour");  
  if($scope.headingfour === null){$scope.headingfour = 'Switch Four';}

  $scope.headingfive = window.localStorage.getItem("headingfive");  
  if($scope.headingfive === null){$scope.headingfive = 'Switch Five';}

  $scope.headingsix = window.localStorage.getItem("headingsix");  
  if($scope.headingsix === null){$scope.headingsix = 'Switch Six';}

  $scope.headingseven = window.localStorage.getItem("headingseven");  
  if($scope.headingseven === null){$scope.headingseven = 'Switch Seven';}

  $scope.headingeight = window.localStorage.getItem("headingeight");  
  if($scope.headingeight === null){$scope.headingeight = 'Switch Eight';}

  $scope.switchOn = function (param) {
        var s = 'navin';
        window.localStorage.setItem("switchone", s);
        $scope.onurl = 'http://192.168.43.167/?pin=OFF'+param;        
        $http.get($scope.onurl)
        .success(function(data) {
            
            console.log('switch on');
        })
        .error(function(data) {
            
            console.log('Error: ' + data);
        });
        console.log('nothing on');
    };

    $scope.switchOff = function (param) {
          
        $scope.offurl = 'http://192.168.43.167/?pin=ON'+param;    
        
        $http.get($scope.offurl)
        .success(function(data) {
             console.log('switch on');
        })
        .error(function(data) {
           
            console.log('Error: ' + data);
        });
        console.log('nothing off');
    };
  
})
.controller('EditInfoCtrl', function($scope, $ionicModal, $timeout, $interval) {
    // Perform the login action when the user submits the login form

     var currdate = new Date();
      $scope.title = currdate;
      $interval(function(){
        currdate = new Date();
        $scope.title = currdate;
        $scope.title = $scope.title.toLocaleTimeString('en-US');
        
        var d=new Date("2016-12-23 03:36:50 PM");
        var difference = currdate.getTime()-d.getTime()
        console.log(currdate.getTime()-d.getTime());
        if(difference > 0)
        {
          //document.write(d.getTime() + " milliseconds since 1970/01/01"+ "----" + $scope.title + "----" + $scope.title+"---");
        }
      }, 1000);

      $scope.loginData.title = window.localStorage.getItem("title");
      if($scope.loginData.title === null){$scope.loginData.title = 'Navin IOT';}
      
      $scope.loginData.headingone = window.localStorage.getItem("headingone");  
      if($scope.loginData.headingone === null){$scope.loginData.headingone = 'Switch One';}

      $scope.loginData.headingtwo = window.localStorage.getItem("headingtwo");  
      if($scope.loginData.headingtwo === null){$scope.loginData.headingtwo = 'Switch Two';}

      $scope.loginData.headingthree = window.localStorage.getItem("headingthree");  
      if($scope.loginData.headingthree === null){$scope.loginData.headingthree = 'Switch Three';}

      $scope.loginData.headingfour = window.localStorage.getItem("headingfour");  
      if($scope.loginData.headingfour === null){$scope.loginData.headingfour = 'Switch Four';}

      $scope.loginData.headingfive = window.localStorage.getItem("headingfive");  
      if($scope.loginData.headingfive === null){$scope.loginData.headingfive = 'Switch Five';}

      $scope.loginData.headingsix = window.localStorage.getItem("headingsix");  
      if($scope.loginData.headingsix === null){$scope.loginData.headingsix = 'Switch Six';}

      $scope.loginData.headingseven = window.localStorage.getItem("headingseven");  
      if($scope.loginData.headingseven === null){$scope.loginData.headingseven = 'Switch Seven';}

      $scope.loginData.headingeight = window.localStorage.getItem("headingeight");  
      if($scope.loginData.headingeight === null){$scope.loginData.headingeight = 'Switch Eight';}

    $scope.saveEditInfo = function() {
      console.log('Doing login', $scope.loginData);
      var s = $scope.loginData.title;
      window.localStorage.setItem("title", s);
      
      s = $scope.loginData.headingone;
      window.localStorage.setItem("headingone", s);

      s = $scope.loginData.headingtwo;
      window.localStorage.setItem("headingtwo", s);

      s = $scope.loginData.headingthree;
      window.localStorage.setItem("headingthree", s);

      s = $scope.loginData.headingfour;
      window.localStorage.setItem("headingfour", s);

      s = $scope.loginData.headingfive;
      window.localStorage.setItem("headingfive", s);

      s = $scope.loginData.headingsix;
      window.localStorage.setItem("headingsix", s);

      s = $scope.loginData.headingseven;
      window.localStorage.setItem("headingseven", s);

      s = $scope.loginData.headingeight;
      window.localStorage.setItem("headingeight", s);

      $scope.msg = "Success";
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        //$scope.closeLogin();
        window.location.reload();
      }, 1000);
    };
})
.controller('TimerCtrl', function($scope, $stateParams, $timeout, $interval) {
    var currdate = new Date();
      $scope.title = currdate;
      $interval(function(){
        currdate = new Date();
        $scope.title = currdate;
        $scope.title = $scope.title.toLocaleTimeString('en-US');
        
        var d=new Date("2016-12-23 03:36:50 PM");
        var difference = currdate.getTime()-d.getTime()
        console.log(currdate.getTime()-d.getTime());
        if(difference > 0)
        {
          //document.write(d.getTime() + " milliseconds since 1970/01/01"+ "----" + $scope.title + "----" + $scope.title+"---");
        }
      }, 1000);


      console.log("i am timer");
 
  
  /*$scope.title = window.localStorage.getItem("title");
  if($scope.title === null){$scope.title = 'Navin IOT';}*/
  
  $scope.headingone = window.localStorage.getItem("headingone");  
  if($scope.headingone === null){$scope.headingone = 'Switch One';}

  $scope.headingtwo = window.localStorage.getItem("headingtwo");  
  if($scope.headingtwo === null){$scope.headingtwo = 'Switch Two';}

  $scope.headingthree = window.localStorage.getItem("headingthree");  
  if($scope.headingthree === null){$scope.headingthree = 'Switch Three';}

  $scope.headingfour = window.localStorage.getItem("headingfour");  
  if($scope.headingfour === null){$scope.headingfour = 'Switch Four';}

  $scope.headingfive = window.localStorage.getItem("headingfive");  
  if($scope.headingfive === null){$scope.headingfive = 'Switch Five';}

  $scope.headingsix = window.localStorage.getItem("headingsix");  
  if($scope.headingsix === null){$scope.headingsix = 'Switch Six';}

  $scope.headingseven = window.localStorage.getItem("headingseven");  
  if($scope.headingseven === null){$scope.headingseven = 'Switch Seven';}

  $scope.headingeight = window.localStorage.getItem("headingeight");  
  if($scope.headingeight === null){$scope.headingeight = 'Switch Eight';}

  $scope.switchOn = function (param) {
        var s = 'navin';
        window.localStorage.setItem("switchone", s);
        $scope.onurl = 'http://192.168.43.167/?pin=OFF'+param;        
        $http.get($scope.onurl)
        .success(function(data) {
            
            console.log('switch on');
        })
        .error(function(data) {
            
            console.log('Error: ' + data);
        });
        console.log('nothing on');
    };

    $scope.switchOff = function (param) {
          
        $scope.offurl = 'http://192.168.43.167/?pin=ON'+param;    
        
        $http.get($scope.offurl)
        .success(function(data) {
             console.log('switch on');
        })
        .error(function(data) {
           
            console.log('Error: ' + data);
        });
        console.log('nothing off');
    };



})
.controller('AlarmInfoCtrl', function($scope, $ionicModal, $timeout, $interval) {
    // Perform the login action when the user submits the login form

     var currdate = new Date();
      $scope.title = currdate;
      $interval(function(){
        currdate = new Date();
        $scope.title = currdate;
        $scope.title = $scope.title.toLocaleTimeString('en-US');
        
        var d=new Date("2016-12-23 03:36:50 PM");
        var difference = currdate.getTime()-d.getTime()
        console.log(currdate.getTime()-d.getTime());
        if(difference > 0)
        {
          //document.write(d.getTime() + " milliseconds since 1970/01/01"+ "----" + $scope.title + "----" + $scope.title+"---");
        }
      }, 1000);

      $scope.loginData.title = window.localStorage.getItem("title");
      if($scope.loginData.title === null){$scope.loginData.title = 'Navin IOT';}
      
      $scope.loginData.headingone = window.localStorage.getItem("headingone");  
      if($scope.loginData.headingone === null){$scope.loginData.headingone = 'Switch One';}

      $scope.loginData.headingtwo = window.localStorage.getItem("headingtwo");  
      if($scope.loginData.headingtwo === null){$scope.loginData.headingtwo = 'Switch Two';}

      $scope.loginData.headingthree = window.localStorage.getItem("headingthree");  
      if($scope.loginData.headingthree === null){$scope.loginData.headingthree = 'Switch Three';}

      $scope.loginData.headingfour = window.localStorage.getItem("headingfour");  
      if($scope.loginData.headingfour === null){$scope.loginData.headingfour = 'Switch Four';}

      $scope.loginData.headingfive = window.localStorage.getItem("headingfive");  
      if($scope.loginData.headingfive === null){$scope.loginData.headingfive = 'Switch Five';}

      $scope.loginData.headingsix = window.localStorage.getItem("headingsix");  
      if($scope.loginData.headingsix === null){$scope.loginData.headingsix = 'Switch Six';}

      $scope.loginData.headingseven = window.localStorage.getItem("headingseven");  
      if($scope.loginData.headingseven === null){$scope.loginData.headingseven = 'Switch Seven';}

      $scope.loginData.headingeight = window.localStorage.getItem("headingeight");  
      if($scope.loginData.headingeight === null){$scope.loginData.headingeight = 'Switch Eight';}

    $scope.saveEditInfo = function() {
      console.log('Doing login', $scope.loginData);
      var s = $scope.loginData.title;
      window.localStorage.setItem("title", s);
      
      s = $scope.loginData.headingone;
      window.localStorage.setItem("headingone", s);

      s = $scope.loginData.headingtwo;
      window.localStorage.setItem("headingtwo", s);

      s = $scope.loginData.headingthree;
      window.localStorage.setItem("headingthree", s);

      s = $scope.loginData.headingfour;
      window.localStorage.setItem("headingfour", s);

      s = $scope.loginData.headingfive;
      window.localStorage.setItem("headingfive", s);

      s = $scope.loginData.headingsix;
      window.localStorage.setItem("headingsix", s);

      s = $scope.loginData.headingseven;
      window.localStorage.setItem("headingseven", s);

      s = $scope.loginData.headingeight;
      window.localStorage.setItem("headingeight", s);

      $scope.msg = "Success";
      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        //$scope.closeLogin();
        window.location.reload();
      }, 1000);
    };
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
