import React, { Component } from "react";

import profile from "../../res/img/profile.png"


import "./HomePage.css"

export default class HomePage extends Component {

    /*
    getPictures() {
        const gallery = require.context("../../res/img/Gallery", false, /\.png/);
        gallery.keys.map((answer) => {
            return(<img src={answer} />);
        })
    }
    */

    render() {
        return(
            <div>
                <img src={profile} alt="¯\_(ツ)_/¯" className="profileImage" />
                <h2>Website</h2>
                <p>This is a website dedicated to my projects and hobbies.</p>
                <div>
                </div>
            </div>
        );
    }
};