import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import Portfolio from '../components/Portfolio';
import { ProjectsMapped } from '../data/Projects';
import Employers from '../data/Employers';

const filters = Employers.filter(employer => employer.hasOwnProperty('slug')).map(employer => {
    return {
        name: employer.name,
        className: employer.slug,
    }
});

function Work() {
    const { t } = useTranslation();

    return (<section id="projects" className="d-print-none">
        <div className="container">
            <Fade direction="top" triggerOnce={true}>
                <h2 className="section-title">{t('projects.title')}</h2>
            </Fade>

            <div className="spacer"></div>

            <Portfolio filters={filters} items={ProjectsMapped} />
        </div>
    </section>);
}

export default Work;