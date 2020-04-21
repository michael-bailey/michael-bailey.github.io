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
    this.setState({page: page})
  }

  render() {
    return (
      <div>
        <HeaderBar menuItems={
          <ul>
            <li onClick={() => this.changePage(<AboutPage />)}>about</li>
            <li onClick={() => this.changePage(<HomePage />)}>home</li>
            <li onClick={() => this.changePage(<CVPage />)}>cv</li> 
          </ul>
          }>

          <h1>Michael Bailey</h1>
        </HeaderBar>

        <div className="pageSpacer">
          {this.state.page}
        </div>
      </div>
    );
  }
}
