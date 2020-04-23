import React, { Component } from "react";
import "./HeaderBar.css"

export default class HeaderBar extends Component {

    render() {
        return (
            <div className="HeaderBar">
                <div className='HeaderContents'>
                    <h1>{ this.props.title }</h1>
                </div>

                <ul className="MenuBar">
                    { this.props.children }
                </ul>
            </div>
        );
    }
}