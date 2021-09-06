import React, { Component } from 'react'
import Navbar from './navBar'

import '../css/home.css'
import BusinessCard from './business-card'
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                {/* <Navbar className="nav-bar" /> */}
                <div className="quote">
                    <p><strong>Find Your Dream Job</strong></p>
                    <p>Browse through thousands of full-time or part-time jobs near you</p>
                </div>

                <div className="search-box">
                    <div className="search flex-grow-1">
                        <div className="search-icon"></div>
                        <input type="search" placeholder="Job title or keyword" className="w-100"></input>
                    </div>

                    <div className="location-box flex-grow-1">
                        <div className="location-icon"></div>
                        <select name="location" className="w-100">
                            <option value="" disabled selected>Select location</option>
                            <option value="bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>

                    <button className="search-btn flex-grow-1">Search</button>
                </div>

                <div className="business-card-container">
                <BusinessCard />
                <BusinessCard/>
                <BusinessCard/>
                <BusinessCard/>
                <BusinessCard/>
                <BusinessCard/>
                </div>
           
            </div>
        )
    }
}