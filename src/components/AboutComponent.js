import React, { Component } from 'react';
import angular from 'angular';

class About extends Component {

    componentDidMount (){
     angular.module('ngApp');
     angular.bootstrap(this.container, ['ngApp']);
     console.log(this.container);
   
   }
    
   html = ' <div ng-controller="AboutController as abtCtrl">{{abtCtrl.message}}  </div> ';
 
   render=()=>(    
       <div className="App">
         
         <div ref={c => this.container = c}  dangerouslySetInnerHTML={{__html: this.html}}  />
       </div>
     
   )
 }
 
 export default About;