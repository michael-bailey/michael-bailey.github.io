import React, { Component } from "react";
import "./HeaderBar.css"

export default class HeaderBar extends Component {

    render() {
        return (
            <div className="HeaderBar">
                <div className="TopBar">
                    { this.props.children }
                </div>
            </div>
        );
    }
}