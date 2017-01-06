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

  /*var monthNames = [ "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12" ];
  var currdate = new Date();
       console.log(currdate.getDate());
    console.log(monthNames[currdate.getMonth()]);
    console.log(currdate.getFullYear());
    console.log(currdate.getHours());
    console.log(currdate.getMinutes());*/
  
  var currdate = new Date();
  $scope.title = currdate;
  $interval(function(){
    currdate = new Date();
    $scope.title = currdate;
    $scope.title = $scope.title.toLocaleTimeString('en-US');
    
    var d=new Date("2016-12-23 03:36:50 PM");
    var difference = currdate.getTime()-d.getTime()
    //console.log(currdate.getTime()-d.getTime());
    
 /*   console.log(currdate.getDate());
    console.log(monthNames[currdate.getMonth()]);
    console.log(currdate.getFullYear());
    console.log(currdate.getHours());
    console.log(currdate.getMinutes());*/
    
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
.controller('TimerCtrl', function($scope, $stateParams, $timeout, $interval, $http) {

  var monthNames = [ "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12" ];
  var currdate = new Date();
       console.log(currdate.getDate());
    console.log(monthNames[currdate.getMonth()]);
    console.log(currdate.getFullYear());
    console.log(currdate.getHours());
    console.log(currdate.getMinutes());

    $scope.hhs1 = currdate.getHours().toString();
    $scope.hhs2 = currdate.getHours().toString();
    $scope.hhs3 = currdate.getHours().toString();
    $scope.hhs4 = currdate.getHours().toString();
    $scope.hhs5 = currdate.getHours().toString();
    $scope.hhs6 = currdate.getHours().toString();
    $scope.hhs7 = currdate.getHours().toString();
    $scope.hhs8 = currdate.getHours().toString();

    $scope.mms1 = currdate.getMinutes().toString();
    $scope.mms2 = currdate.getMinutes().toString();
    $scope.mms3 = currdate.getMinutes().toString();
    $scope.mms4 = currdate.getMinutes().toString();
    $scope.mms5 = currdate.getMinutes().toString();
    $scope.mms6 = currdate.getMinutes().toString();
    $scope.mms7 = currdate.getMinutes().toString();
    $scope.mms8 = currdate.getMinutes().toString();

    $scope.dds1 = currdate.getDate().toString();
    $scope.mos1 = monthNames[currdate.getMonth()];
    $scope.yos1 = currdate.getFullYear().toString();

    $scope.onoffs1 = 'ON';

    $scope.alarmset1 = window.localStorage.getItem("alarmset1");  
    if($scope.alarmset1 === null){$scope.alarmset1 = 0;}
    

    var currdate = new Date();
      $scope.title = currdate;
      $interval(function(){
        currdate = new Date();
        $scope.title = currdate;
        $scope.title = $scope.title.toLocaleTimeString('en-US');
        
        var d=new Date("2017-01-05 02:27:00 PM");
        var difference = currdate.getTime()-d.getTime()
        console.log(currdate.getTime()-d.getTime());
        if(difference > 0)
        {
          //alert("navin");
          //document.write(d.getTime() + " milliseconds since 1970/01/01"+ "----" + $scope.title + "----" + $scope.title+"---");
        }
      }, 5000);


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


/*  Setting up hours start */
  $scope.switch1hSet = function() {
    var currentItem = this.hhs1;
    $scope.hhs1 = currentItem;
  };

  $scope.switch2hSet = function() {
    var currentItem = this.hhs2;
    $scope.hhs2 = currentItem;
  };

  $scope.switch3hSet = function() {
    var currentItem = this.hhs3;
    $scope.hhs3 = currentItem;
  };

  $scope.switch4hSet = function() {
    var currentItem = this.hhs4;
    $scope.hhs4 = currentItem;
  };

  $scope.switch5hSet = function() {
    var currentItem = this.hhs5;
    $scope.hhs5 = currentItem;
  };

  $scope.switch6hSet = function() {
    var currentItem = this.hhs6;
    $scope.hhs6 = currentItem;
  };

  $scope.switch7hSet = function() {
    var currentItem = this.hhs7;
    $scope.hhs7 = currentItem;
  };

  $scope.switch8hSet = function() {
    var currentItem = this.hhs8;
    $scope.hhs8 = currentItem;
  };

  /*  Setting up hours ends */

  /*  Setting up months start */
  $scope.switch1mSet = function() {
    var currentItem = this.mms1;
    $scope.mms1 = currentItem;
  };

  $scope.switch2mSet = function() {
    var currentItem = this.mms2;
    $scope.mms2 = currentItem;
  };

  $scope.switch3mSet = function() {
    var currentItem = this.mms3;
    $scope.mms3 = currentItem;
  };

  $scope.switch4mSet = function() {
    var currentItem = this.mms4;
    $scope.mms4 = currentItem;
  };

  $scope.switch5mSet = function() {
    var currentItem = this.mms5;
    $scope.mms5 = currentItem;
  };

  $scope.switch6mSet = function() {
    var currentItem = this.mms6;
    $scope.mms6 = currentItem;
  };

  $scope.switch7mSet = function() {
    var currentItem = this.mms7;
    $scope.mms7 = currentItem;
  };

  $scope.switch8mSet = function() {
    var currentItem = this.mms8;
    $scope.mms8 = currentItem;
  };

  /*  Setting up months ends */
 
 /*  Setting up on off start */
  $scope.switch1onoffSet = function() {
    var currentItem = this.onoffs1;
    $scope.onoffs1 = currentItem;
  };

 /*  Setting up on off ends */ 

/*  Setting up day start */
  $scope.switch1dateSet = function() {
    var currentItem = this.dds1;
    $scope.dds1 = currentItem;
  };

/*  Setting up day ends */


/*  Setting up month start */
  $scope.switch1monthSet = function() {
    var currentItem = this.mos1;
    $scope.mos1 = currentItem;
  };


/*  Setting up month ends */
 

/*  Setting up year start */

  $scope.switch1yearSet = function() {
    var currentItem = this.yos1;
    $scope.yos1 = currentItem;
  };


/*  Setting up year ends */


/*  Setting up switch start */
  $scope.switch1Set = function() {
    /*console.log($scope.dds1);
    console.log($scope.mos1);
    console.log($scope.hhs1);
    console.log($scope.yos1);
    console.log($scope.hhs1);
    console.log($scope.mms1);
    console.log($scope.onoffs1);*/

       /*var d=new Date("2017-01-05 02:27:00 PM");*/
    var alarmdate1 = $scope.yos1 + "-" + $scope.mos1 + "-" + $scope.dds1 + " " + $scope.hhs1 + ":" + $scope.mms1 + ":00 " + $scope.onoffs1;
    $scope.alarmset1 = "Alarm set on " + alarmdate1;
    var s = $scope.alarmset1;
    window.localStorage.setItem("alarmset1", s);
    console.log(alarmdate1);    
        
  };

  $scope.switch2Set = function() {
    console.log($scope.hhs2);
    console.log($scope.mms2);
  };

  $scope.switch3Set = function() {
    console.log($scope.hhs3);
    console.log($scope.mms3);
  };

  $scope.switch4Set = function() {
    console.log($scope.hhs4);
    console.log($scope.mms4);
  };

  $scope.switch5Set = function() {
    console.log($scope.hhs5);
    console.log($scope.mms5);
  };

  $scope.switch6Set = function() {
    console.log($scope.hhs6);
    console.log($scope.mms6);
  };

  $scope.switch7Set = function() {
    console.log($scope.hhs7);
    console.log($scope.mms7);
  };

  $scope.switch8Set = function() {
    console.log($scope.hhs8);
    console.log($scope.mms8);
  };


/*  Setting up switch ends */


  $scope.switchOn = function (param) {
        
        console.log($scope.hhs1);
        console.log(param);
        var s = 'navin';
       /* window.localStorage.setItem("switchone", s);
        $scope.onurl = 'http://192.168.43.167/?pin=OFF'+param;        
        $http.get($scope.onurl)
        .success(function(data) {
            
            console.log('switch on');
        })
        .error(function(data) {
            
            console.log('Error: ' + data);
        });
        console.log('nothing on');*/
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
.controller('AlarmInfoCtrl', function($scope, $ionicModal, $timeout, $interval, $http) {
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
