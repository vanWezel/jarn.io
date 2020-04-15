import React from 'react';
import moment from 'moment';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import 'moment/locale/nl';
import './Timeline.css';

interface TimeLineItem {
    period: {
        start: string;
        end: string;
    };
    name: string;
    location: string;
}

interface TimelineProps {
    items: TimeLineItem[];
    type: string;
}

function Timeline(props: TimelineProps) {
    const { t } = useTranslation();

    const format = (date: string) => {
        if (!date) {
            return t('now');
        }

        return moment(date).format('MMM YY');
    }
    
    return (<Fade cascade direction="top" triggerOnce={true}>
        <div className={`timeline -${props.type} bg-dark rounded padding-30 overflow-hidden`}>
            <span className="line"></span>
            {props.items.map((item, index) => <div key={index} className="timeline-container">
                <div className="content">
                    <span className="time">{format(item.period.start)} - {format(item.period.end)}</span>
                    <h3 className="title">{item.name}</h3>
                    <p>{item.location}</p>
                </div>
            </div>)}
        </div>
    </Fade>);
}

export default Timeline;
