import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';

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
        <HeaderBar title="Michael Bailey">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
        </HeaderBar>
        <div className="pageSpacer">
          {this.state.page}
        </div>
      </div>
    );
  }
}
