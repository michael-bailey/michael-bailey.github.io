import React, { Component } from "react";
import "./HeaderBar.css"

export default class HeaderBar extends Component {

    render() {
        return (
            <div className="HeaderBar">
                <div>
                    { this.props.children }
                </div>
                <div>
                    { this.props.menuItems }
                </div>
            </div>
        );
    }
}