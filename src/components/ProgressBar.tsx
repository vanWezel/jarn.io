import React from 'react';
import { Fade } from 'react-awesome-reveal';

import './ProgressBar.css';

interface ProgressBarProps {
    label: string;
    value: number;
}

function ProgressBar(props: ProgressBarProps) { 
    return (<Fade direction="top" triggerOnce={true}>
        <div className="skill-item">
            <div className="skill-info clearfix">
                <h4>{props.label}</h4>
            </div>
            <div className="progress">
                <div className="progress-bar" style={{ width: `${props.value}%` }}></div>
            </div>
            <div className="spacer"></div>
        </div>
    </Fade>);
}

export default ProgressBar;