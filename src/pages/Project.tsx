import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown'
import { Bounce } from 'react-awesome-reveal';
import ReactGA from 'react-ga';

import Page from './Page';
import Portfolio from '../components/Portfolio';
import Projects, { ProjectsMapped } from '../data/Projects';
import Employers from '../data/Employers';

function Project() {
    const { employerSlug, slug } = useParams();
    const { t } = useTranslation();
    const [description, setDescription] = useState('');
    const history = useHistory();
    const projectsFiltered = Projects.filter(item => item.url === history.location.pathname).map(item => {
        const employer = Employers.filter(item => item.slug === employerSlug)[0];
        const stack = item.stack ? item.stack : item.extrastack ? employer.stack.concat(item.extrastack) : employer.stack;
        const tools = item.tools ? item.tools : employer.tools;

        return {
            stack,
            tools,
            employer: employer.name,
            employerSlug: employer.slug,
            name: item.name,
            image: item.image,
            image2x: item.image2x,
        };
    });
    
    const project = projectsFiltered[0];

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

        fetch(`/locales/nl/projects/${employerSlug}/${slug}.md`).then(response => {
            response.text().then(text => setDescription(text));
        });
    }, [employerSlug, slug]);

    const content = <>
        {description && <ReactMarkdown source={description} />}
        {!description && <p>{t('projects.loading')}</p>}
    </>;

    const sidebar = <>
        {project.stack && <>
            <h4>{t('projects.tech-stack')}</h4>
            <ul className="list-inline">
                <Bounce cascade triggerOnce damping={0.1}>
                    {project.stack.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
                </Bounce>
            </ul>
        </>}

        {project.tools && <>
            <h4>{t('projects.tools')}</h4>
            <ul className="list-inline">
                <Bounce cascade triggerOnce damping={0.1}>
                    {project.tools.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
                </Bounce>
            </ul>
        </>}
    </>;

    return (<Page
        title={project.name}
        subtitle={<Link to={`/employer/${project.employerSlug}`} title={project.employer}>{project.employer}</Link>}
        content={content}
        description={description}
        sidebar={sidebar}>
        <Helmet>
            <title>{`${project.name} @ ${project.employer} - Jarno van Wezel - Software Engineer - Rotterdam`}</title>
        </Helmet>
        <Portfolio items={ProjectsMapped.filter(project => project.url !== history.location.pathname)} />
    </Page>);
}

export default Project;