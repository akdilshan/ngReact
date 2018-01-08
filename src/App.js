import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import angular from 'angular';
import ngRoute from 'angular-route';


 angular
    .module('ngApp', [
      'ngRoute'    
    ])
    .config(config)
    .run(run)
    .controller('HomeController', HomeController);
      function HomeController() {
      var vm = this;
      vm.message = 'success';
  };

  angular.module('ngApp').controller('AboutController', HomeController);
  function HomeController() {
  var vm = this;
  vm.message = 'success';
  };

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
      // routes
      $routeProvider
        .when('/', {
          template: '<div > <div>{{homeCtrl.message}}</div>  </div> ',
          controller: 'HomeController'
          
        })
        .otherwise({
          redirectTo: '/404'
        });
  
      // use the HTML5 History API
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
    
    function run() {
       console.log('App ready!');
    }



class App extends Component {

   componentDidMount (){
    angular.module('ngApp');
    angular.bootstrap(this.container, ['ngApp']);
    console.log(this.container);
  
  }
   
  html = ' <div ng-controller="HomeController as homeCtrl">{{homeCtrl.message}}  </div> ';

  render=()=>(    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div ref={c => this.container = c}  dangerouslySetInnerHTML={{__html: this.html}}  />
      </div>
    
  )
}

export default App;
