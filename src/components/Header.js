import React, { Component, useState } from 'react';
import '../css/style.css';
import logo from '../resource/abc_logo.svg'
import { Redirect, NavLink } from 'react-router-dom';

export default function Header() {
    const [industriesActive, setIndustriesActive] = useState(false);
    const [servicesActive, setServicesActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false)

    return (
        <div className="header-flex-grid pad-sides-5 height-header">
                <div className="col pad-top">
                    <div className="width-min">
                        <img src={logo} alt="Logo" />
                        <NavLink className={`menu-item ${industriesActive ? "active" : ""}`} to="/industries">Industries</NavLink>
                        <NavLink className={`menu-item ${servicesActive ? "active" : ""}`} to="/services">Services</NavLink>
                        <NavLink className={`menu-item ${aboutActive ? "active" : ""}`} to="/about">About Us</NavLink>
                    </div>
                </div>
                <div className="col flex-end height-min pad-top">
                    <div className="contact-button">Contact Us</div>
                </div>
        </div>
    );
}
