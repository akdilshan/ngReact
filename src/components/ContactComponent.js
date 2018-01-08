import React, { Component } from 'react';
import angular from 'angular';

class Contact extends Component {

    componentDidMount (){
     angular.module('ngApp');
     angular.bootstrap(this.container, ['ngApp']);     
   
   }
    
   html = ' <div ng-controller="ContactController as contactCtrl">{{contactCtrl.message}}  </div> ';
 
   render=()=>(    
       <div className="App">
         
         <div ref={c => this.container = c}  dangerouslySetInnerHTML={{__html: this.html}}  />
       </div>
     
   )
 }
 
 export default Contact;