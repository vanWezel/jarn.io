import React from 'react';
import moment from 'moment';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import 'moment/locale/nl';
import './Timeline.css';

interface TimeLineItem {
    period: {
        start: string;
        end: string;
    };
    name: string;
    location: string;
    url?: string;
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
        } else if (date.length === 4) {
            return date;
        }

        return moment(date).format('MMM \'YY');
    }

    return (<Fade cascade direction="top" triggerOnce={true}>
        <div className={`timeline -${props.type} bg-dark rounded padding-30 overflow-hidden`}>
            <span className="line"></span>

            {props.items.map((item, index) => {
                const Content = <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span className="time">{format(item.period.start)} - {format(item.period.end)}</span>
                        <h3 className="title">{item.name}</h3>
                        <p>{item.location}</p>
                    </div>
                    {item.url && <i className="icon-arrow-right"></i>}
                </div>;

                return (<div key={index} className="timeline-container">
                    {item.url && !item?.url.startsWith('https://') && <Link className="content" to={item.url} title={item.name}>{Content}</Link>}
                    {item.url && item?.url.startsWith('https://') && <a className="content" href={item.url} target="_blank" rel="noopener noreferrer" title={item.name}>{Content}</a>}
                    {!item.url && <div className="content">{Content}</div>}
                </div>);
            })}
        </div>
    </Fade>);
}

export default Timeline;
