import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import './ProgressBar.css';

interface ProgressBarProps {
    label: string;
    value: number;
}

function ProgressBar(props: ProgressBarProps) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(props.value);
    }, [props.value]);
    
    return (<Fade direction="top" triggerOnce={true}>
        <div className="skill-item">
            <div className="skill-info clearfix">
                <h4 className="float-left mb-3 mt-0">{props.label}</h4>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: `${width}%` }}></div>
            </div>
            <div className="spacer" style={{ height: 20 }}></div>
        </div>
    </Fade>);
}

export default ProgressBar;