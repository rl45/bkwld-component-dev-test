import React, { Component, useState } from 'react';
import '../css/style.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function CallToAction(props) {

    return (
            <div className="call-to-action">
                <div className="flex-grid">
                    <div className="col call-to-action-header">
                        {props.cta}
                    </div>
                    <div className="col ml-5 call-to-action-tag">
                        <div className="vertically-center">LET'S TALK.</div> <ArrowForwardIcon className="vertically-center call-to-action-icon"></ArrowForwardIcon>
                    </div>
                </div>
            </div>
    );
}
