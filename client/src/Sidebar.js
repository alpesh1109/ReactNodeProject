import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    //this.SignInn();
  }

  
  render() {

  
    return (
        <div class="sidebar-content">
        <div class="sidebar-brand">
            <a href="@">pro sidebar</a>
            <div id="close-sidebar">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="sidebar-header">
            <div class="user-pic">
                <img class="img-responsive img-rounded" src="assets/img/user.jpg" alt="user" />
            </div>
            <div class="user-info">
                <span class="user-name">Jhon
                    <strong>Smith</strong>
                </span>
                <span class="user-role">Administrator</span>
                <span class="user-status">
                    <i class="fa fa-circle"></i>
                    <span>Online</span>
                </span>
            </div>
        </div>
       
        <div class="sidebar-search">
            <div>
                <div class="input-group">
                    <input type="text" class="form-control search-menu" placeholder="Search..."/>
                    <div class="input-group-append">
                        <span class="input-group-text">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="sidebar-menu">
            <ul>
                <li class="header-menu">
                    <span>General</span>
                </li>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class="fa fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                        <span class="badge badge-pill badge-danger">New</span>
                    </a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li>
                                <a href="#">Dashboard 1
                                    <span class="badge badge-pill badge-success">Pro</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">Dashboard 2</a>
                            </li>
                            <li>
                                <a href="#">Dashboard 3</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class="fa fa-shopping-cart"></i>
                        <span>E-commerce</span>
                        <span class="badge badge-pill badge-primary">3</span>
                    </a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li>
                            <Link to={{ pathname: '/Country' }}>Country</Link>
                            </li>
                            <li>
                                <a href="#">Orders</a>
                            </li>
                            <li>
                                <a href="#">Credit cart</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class="far fa-gem"></i>
                        <span>Components</span>
                    </a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li>
                                <a href="#" >General</a>
                            </li>
                            <li>
                                <a href="#">Panels</a>
                            </li>
                            <li>
                                <a href="#">Tables</a>
                            </li>
                            <li>
                                <a href="#">Icons</a>
                            </li>
                            <li>
                                <a href="#">Forms</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class="fa fa-chart-line"></i>
                        <span>Charts</span>
                    </a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li>
                                <a href="#">Pie chart</a>
                            </li>
                            <li>
                                <a href="#">Line chart</a>
                            </li>
                            <li>
                                <a href="#">Bar chart</a>
                            </li>
                            <li>
                                <a href="#">Histogram</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-dropdown">
                    <a href="#">
                        <i class="fa fa-globe"></i>
                        <span>Maps</span>
                    </a>
                    <div class="sidebar-submenu">
                        <ul>
                            <li>
                                <a href="#">Google maps</a>
                            </li>
                            <li>
                                <a href="#">Open street map</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="header-menu">
                    <span>Extra</span>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-calendar"></i>
                        <span>Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-folder"></i>
                        <span>Examples</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-book"></i>
                        <span>Documentation</span>
                    </a>
                </li>
            </ul>
        </div>
       
    </div>
    );
  }
}

export default Sidebar; 