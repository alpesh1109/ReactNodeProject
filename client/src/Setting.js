import React, { Component } from 'react';

//import logo from './logo.svg';
//import './App.css';
// import axios from 'axios';


class Setting extends Component {
  constructor(props) {
    super(props);
       this.customjs = this.customjs.bind(this);
  }

  componentDidMount() {
    //this.SignInn();
   //  this.customjs();
  }
 customjs() {
       const script = document.createElement("script");
       script.src = "/assets/js/custom.js";
       document.body.appendChild(script);
    }
  
  render() {
  
    return (

        <main class="page-content">
        <div class="container-fluid">
            <div class="row">
                <div class="form-group col-md-12">
                    <h2>Sidebar template</h2>
                   

                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="form-group col-md-12">
                    <h3>Themes</h3>
                    <p>Here are more themes that you can use</p>
                </div>
            </div>

            <div class="row">
                <div class="form-group col-md-12">
                    <a href="#" data-theme="chiller-theme" class="theme chiller-theme selected"></a>
                    <a href="#" data-theme="ice-theme" class="theme ice-theme"></a>
                    <a href="#" data-theme="cool-theme" class="theme cool-theme"></a>
                    <a href="#" data-theme="light-theme" class="theme light-theme"></a>                       
                </div>
                <div class="form-group col-md-12">
                    <p>You can also use background image </p>
                </div>
                <div class="form-group col-md-12">
                    <a href="#" data-bg="bg1" class="theme theme-bg selected"></a>
                    <a href="#" data-bg="bg2" class="theme theme-bg"></a>
                    <a href="#" data-bg="bg3" class="theme theme-bg"></a>
                    <a href="#" data-bg="bg4" class="theme theme-bg"></a>
                </div>
                <div class="form-group col-md-12">
                   <div class="form-check">
                     <label class="form-check-label">
                       <input type="checkbox" class="form-check-input" name="" id="toggle-bg" checked/>
                        Background image
                     </label>
                   </div>
                </div>
               
            </div>

            <hr/>
            
        </div>
    </main>   
    );
  }
}

export default Setting; 