import React, { Component } from "react";
import "./Gallery.css"
import { render } from "@testing-library/react";

export default class Gallery extends Component {
    render() {
        return(
            <div className="Gallery">
                {this.props.children}
            </div>
        )
    }
}