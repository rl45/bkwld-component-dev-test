import React, { Component, useState, useEffect } from 'react';
import '../css/style.css';
import HeadlineSubheader from './HeadlineSubheader'
import CallToAction from './CallToAction'

export default function Page(props) {

    const [blocks, setBlocks] = useState([]);
    const [headline, setHeadline] = useState('');
    const [subhead, setSubhead] = useState('');
    const [cta, setCTA] = useState('');

    useEffect(() => {
        if (props.blocks) {
            setBlocks(props.blocks[0])
            setHeadline(props.blocks[0].headline)
            setSubhead(props.blocks[0].subhead)
            setCTA(props.blocks[0].cta)
            //Update background image after checking image has loaded
            let bgImg = new Image();
            bgImg.onload = function(){
                document.getElementById("container").style.backgroundImage = 'url(' + bgImg.src + ')';
            };
            bgImg.src = `backgrounds/${props.blocks[0].background}`;
            
            document.title = props.type;
        }
    }, [props])

    return (
        <div className="pad-2 pad-sides-7 flex-col height-80">
            <HeadlineSubheader headline={headline} subhead={subhead}></HeadlineSubheader>
            <CallToAction cta={cta}></CallToAction>
        </div>
    );
}
