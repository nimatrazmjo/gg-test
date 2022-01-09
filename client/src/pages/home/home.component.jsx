import React, { Component } from "react";

import "./home.style.scss";

export class Home extends Component {
    constructor() {
        super();
        Object.setPrototypeOf(this, Home.prototype)
    }

    render() {
        return (
            <div className="container">
                <h2>If you want to attack another castle, you need to create an army</h2>
            </div>
        )
    }
}