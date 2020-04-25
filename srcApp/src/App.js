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

  switchPage(page) {
    console.log("changing")
    this.setState({
      page: page
    })
  }

  render() {
    return (
      <>
        <HeaderBar title="Michael Bailey">
          <li onClick={() => this.switchPage(<HomePage />)}>Home</li>
          <li onClick={() => this.switchPage(<CVPage />)}>Projects</li>
          <li onClick={() => this.switchPage(<AboutPage />)}>About</li>
        </HeaderBar>
        <div className="pageSpacer">
          {this.state.page}
        </div>
      </>
    );
  }
}
