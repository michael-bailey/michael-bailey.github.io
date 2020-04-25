import React, { Component } from "react";

import "./GitRepo.css"

export default class GitRepo extends Component {

    componentDidMount() {

    }
    

    render() {
        return(
            <div className="GitRepo">
                <h3><a href={this.props.gitObject.html_url}>{this.props.gitObject.name}</a></h3>
                <p>{this.props.gitObject.description}</p>
            </div>
        );
    }
}