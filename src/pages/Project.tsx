import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { Bounce } from 'react-awesome-reveal';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

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
        const techstack = item.techstack ? item.techstack : item.extraTechstack ? employer.techstack.concat(item.extraTechstack) : employer.techstack;
        const tools = item.tools ? item.tools : employer.tools;

        return {
            techstack,
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
        document.title = `${project.name} @ ${project.employer} - Jarno van Wezel - Software Engineer - Rotterdam`;
    }, [project]);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

        fetch(`/locales/nl/projects/${employerSlug}/${slug}.md`).then(response => {
            response.text().then(text => setDescription(text));
        });
    }, [employerSlug, slug]);

    const Content = <>
        {description && <ReactMarkdown source={description} />}
        {!description && <p>{t('projects.loading')}</p>}
    </>;

    const Sidebar = <>
        {project.techstack && <>
            <h4>{t('projects.tech-stack')}</h4>
            <ul className="list-inline">
                <Bounce cascade triggerOnce damping={0.1}>
                    {project.techstack.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
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
        content={Content}
        sidebar={Sidebar}>
        <Portfolio items={ProjectsMapped.filter(project => project.url !== history.location.pathname)} />
    </Page>);
}

export default Project;