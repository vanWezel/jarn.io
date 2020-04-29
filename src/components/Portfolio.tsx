import React, { useState, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import Isotope from 'isotope-layout';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';

export interface PortfolioItem {
    name: string;
    employer: string;
    employerSlug: string;
    url: string;
    techstack?: string[];
    tools?: string[];
    image: string;
    image2x: string;
}

export interface PortfolioFilter {
    name: string;
    className: string;
}

interface PortfolioProps {
    items: PortfolioItem[];
    filters?: PortfolioFilter[]
}

const Portfolio = (props: PortfolioProps) => {
    const grid = useRef(Isotope);
    const { t } = useTranslation();
    const [filter, setFilter] = useState('*');

    useEffect(() => {
        grid.current = new Isotope('.portfolio-wrapper', {
            itemSelector: '[class*="col-"]',
            percentPosition: true,
            masonry: {
                columnWidth: '[class*="col-"]'
            }
        });

        setTimeout(() => { grid.current.layout() }, 500);
    }, []);

    useEffect(() => {
        if (filter !== '*') {
            grid.current.arrange({ filter: `.${filter}` });
        } else {
            grid.current.arrange({ filter: '*' });
        }
    }, [filter]);

    const filters = props.filters && props.filters.filter(filter => props.items.filter(item => item.employerSlug === filter.className).length !== 0);

    return (<React.Fragment>
        {filters && <Fade cascade direction="top" triggerOnce={true}>
            <ul className="portfolio-filter list-inline">
                <li className={`list-inline-item${filter === '*' ? ' current' : ''}`} onClick={() => setFilter('*')}>
                    {t('portfolio.filter.all')}
                </li>

                {filters.map((item, index) => <li
                    key={index}
                    className={`list-inline-item${filter === item.className ? ' current' : ''}`}
                    onClick={() => setFilter(item.className)}
                >
                    @{item.name}
                </li>)}
            </ul>
        </Fade>}

        <div className="row portfolio-wrapper">
            {props.items.map((item, index) => <div key={index} className={`col-lg-4 col-sm-6 grid-item ${item.employerSlug}`}>
                <Link to={item.url} className="work-content" title={item.name}>
                    <div className="portfolio-item rounded ">
                        <div className="details">
                            <span className="term">{item.employer}</span>
                            <h4 className="title">{item.name}</h4>
                        </div>
                        <div className="thumb">
                            <img src={item.image} srcSet={`${item.image}, ${item.image2x} 2x`} alt={item.name} />
                            <div className="mask"></div>
                        </div>
                    </div>
                </Link>
            </div>)}
        </div>
    </React.Fragment>);
}

export default Portfolio;