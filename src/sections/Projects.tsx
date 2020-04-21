import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import Portfolio from '../components/Portfolio';
import { ProjectsMapped } from '../data/Projects';
import Employers from '../data/Employers';

const filters = Employers.filter((item) => item.filter.length > 0).map((employer) => {
    return {
        name: employer.name,
        className: employer.filter,
    }
});

function Work() {
    const { t } = useTranslation();

    return (<section id="projects">
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