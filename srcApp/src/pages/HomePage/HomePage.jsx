import React, { Component } from "react";


import GitRepo from "../../components/GitRepo/GitRepo"
import Gallery from "../../components/Gallery/Gallery"

import profile from "../../res/img/profile smaller.png"

// importing images


import "./HomePage.css"

export default class HomePage extends Component {

    state = {
        currentRepos: [],
        images: []
    }

    HomePage(props) {
        this.getGithubPages.bind(this);
        this.getImages.bind(this)
    }

    getGithubPages() {
        return(
            <>
                {this.state.currentRepos.slice(0,2).map(function(item){return (<GitRepo gitObject={item} />)})}        
            </>
        )
    }

    getImages() {
        console.log(this.state.images)
        return(
            <>
                {this.state.images.map((item) => <img src={item} alt="whoops. not found" />)}
            </>
        )
    }

    componentDidMount() {
        fetch("https://api.github.com/users/michael-bailey/repos")
        .then(res => res.json())
        .then(result => {this.setState({currentRepos: result})})

        const context = require.context("../../res/img/Gallery/", false, /\.jpe?g/)
        this.setState({images: context.keys().splice(0, 6).map(context)});
    }

    render() {
        return(
            <>
                <img src={profile} alt="¯\_(ツ)_/¯" className="ProfileImage" />
                <h2>Home</h2>
                <p>This is a website dedicated to my projects and hobbies.<br/> as well as infomation about me.</p>
                <div className="ProgrammingSect">
                    <h3>Programming</h3>
                    <p>
                        Quite a lot of what i do in my spare time is programming.<br/>
                        This ranges from some test programs to try a specific area of a language or computing.<br/>
                        to a few larger projects (for example this website).
                    </p>
                    <h4>Current Repositories</h4>
                    <div className="RepoSect">
                        {this.getGithubPages()}
                    </div>
                </div>
                <div className="PhotographySect">
                    <h3>Photography</h3>
                    <p>
                        As a small side project i have started doing some simple photography.<br/>basiclly messing about with a camera taking pictures of plants as they make good desktop backgrounds.
                    </p>
                    <Gallery>
                        {this.getImages()}
                    </Gallery>
                </div>
            </>
        );
    }
};