import React, { Component } from 'react'
import "../css/businessCard.css"

export default class BusinessCard extends Component{
    render(){
        return (
            <div className="card">
                <div className="icon-area">
                </div>
                <div className="details">
                    <p><strong>Executive Producer</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div> 
                        <button className="view-details-btn"> View Details</button>
                    </div>
                </div>
            </div>
        )
    }
}