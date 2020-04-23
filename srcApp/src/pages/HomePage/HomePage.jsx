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
                <h2>Home</h2>
                <p>This is a website dedicated to my projects and hobbies.<br/> as well as infomation about me.</p>
                <div className="programmingSect">
                    <h3>Programming</h3>
                    <p>Quite a lot of what i do in my spare time is programming. <br/>This ranges from some test programs to try a specific area of a language or computing.<br/> to a few larger projects (for example this website).</p>
                </div>
            </div>
        );
    }
};