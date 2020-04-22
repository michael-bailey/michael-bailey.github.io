import React, { Component } from "react";
import "./MenuBar.css"

export default class HeaderBar extends Component {

    render() {
        return (
            <ul className="MenuBar">
                {this.props.children}
            </ul>
        );
    }
}