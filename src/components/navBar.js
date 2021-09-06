import React, { Component } from 'react';
import '../css/navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <div class="logo-icon"></div>
                        <p><strong>JobHunt</strong></p>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div class="nav-links">
                    <a target="_blank">Find Jobs</a>
                    <a target="_blank">Upskill Yourself</a>
                    <a target="_blank" className="ml-auto">Post a job</a>
                    <a target="_blank">Sign in</a>
                </div>
            </div>
        )
    }
}
