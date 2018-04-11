import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, NavItem} from 'react-bootstrap';
var objMenuEle ={
  leftBar:[
    {
      title: "Home",
      link: "/home",
      linkType: 1
    },
    {
      title: "Contact",
      link: "/contact",
      linkType: 2
    },
    {
      title: "About",
      link: "/about",
      linkType: 1
    }
  ]
};

class LeftSideMenuBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeKey: 1,
    };
    
    this.handleSelect = this.handleSelect.bind(this)
  }
  
  handleSelect(selectedKey){
    this.setState({
      activeKey: 2,
    });
    alert(`selected ${selectedKey}`);
  }

  render(){
    return(
      <div class="col-xs-12 col-sm-3 col-md-2 col-lg-2 left-menu-bar">
        <Nav bsStyle="pills" stacked activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey={2} title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey={3} disabled>
            NavItem 3 content
          </NavItem>
        </Nav>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default LeftSideMenuBar;

