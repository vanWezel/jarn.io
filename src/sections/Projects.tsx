import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import Portfolio from '../components/Portfolio';
import Projects from '../data/Projects';
import Employers from '../data/Employers';

const filters = Employers.filter((item) => item.filter.length > 0).map((employer) => {
    return {
        name: employer.name,
        className: employer.filter,
    }
});

const projects = Projects.map(item => {
    const employer = Employers[item.employerIndex];

    return {
        employer: employer.name,
        filter: employer.filter ?? '',
        techstack: employer.techstack,
        tools: employer.tools,
        name: item.name,
        url: item.url,
        image: item.image,
        description: "",
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

            <Portfolio filters={filters} items={projects} />
        </div>
    </section>);
}

export default Work;