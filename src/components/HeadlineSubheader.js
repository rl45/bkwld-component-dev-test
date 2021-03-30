import React, { Component, useState } from 'react';
import '../css/style.css';

export default function PageIndustries(props) {

    return (
        <div className="flex-grid vertically-center padding-top">
            <div className="col headline">
                {props.headline}
            </div>
            <div className="col subheader">
                {props.subhead}
            </div>
        </div>
    );
}
