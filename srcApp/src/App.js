import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import MenuBar from './components/Menu/MenuBar'

import AboutPage from './pages/AboutPage/AboutPage';
import CVPage from "./pages/CVPage/CVPage";
import HomePage from "./pages/HomePage/HomePage";

export default class App extends Component {
  state = {
    page: <HomePage />,
  }

  changePage(page) {
    console.log("changing")
    this.setState({
      page: page
    })
  }

  render() {
    return (
      <div>
        <HeaderBar>
          <h1>Michael Bailey</h1>
        </HeaderBar>
        <MenuBar>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </MenuBar>

        <div className="pageSpacer">
          {this.state.page}
        </div>
      </div>
    );
  }
}
