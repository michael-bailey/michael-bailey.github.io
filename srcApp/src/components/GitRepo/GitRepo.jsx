import React, { Component } from "react";

import "./GitRepo.css"

export default class GitRepo extends Component {

    componentDidMount() {

    }
    

    render() {
        return(
            <div className="GitRepo">
                <a href={this.props.gitObject.html_url}><h3>{this.props.gitObject.name}</h3></a>
                <p>{this.props.gitObject.description}</p>
            </div>
        );
    }
}