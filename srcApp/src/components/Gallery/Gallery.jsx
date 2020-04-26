import React, { Component } from "react";
import "./Gallery.css"
import { render } from "@testing-library/react";

export default class Gallery extends Component {

    state = {
        images: []
    }

    Gallery() {
        this.getImages.bind(this)
    }

    showmodal(imageSrc) {
        
    }

    componentDidMount() {
        const context = require.context("../../res/img/Gallery/", false, /\.jpe?g/)
        this.setState({images: context.keys().splice(0, 6).map(context)});
    }

    getImages() {
        console.log(this.state.images)
        return(
            <>
                {this.state.images.map((item) => <img src={item} alt="whoops. not found" />)}
            </>
        )
    }

    render() {
        return(
            <div className="Gallery">
                {this.getImages()}
            </div>
        )
    }
}