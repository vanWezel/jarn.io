import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown'
import { Bounce } from 'react-awesome-reveal';
import ReactGA from 'react-ga';

import Page from './Page';
import Employers from '../data/Employers';
import { ProjectsMapped } from '../data/Projects';
import Portfolio from '../components/Portfolio';

function Project() {
    const { slug } = useParams();
    const { t } = useTranslation();
    const [description, setDescription] = useState('');
    const employersFilter = Employers.filter(employer => employer.slug === slug);
    const employer = employersFilter[0];

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

        fetch(`/locales/nl/employers/${slug}.md`).then(response => {
            response.text().then(text => {
                console.log(text)
                setDescription(text)
            });
        });
    }, [slug]);

    const content = <>
        {description && <ReactMarkdown>{description}</ReactMarkdown>}
        {!description && <p>{t('projects.loading')}</p>}
    </>;

    const sidebar = <>
        {employer.stack && <>
            <h4>{t('projects.tech-stack')}</h4>
            <ul className="list-inline">
                <Bounce cascade triggerOnce damping={0.1}>
                    {employer.stack.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
                </Bounce>
            </ul>
        </>}

        {employer.tools && <>
            <h4>{t('projects.tools')}</h4>
            <ul className="list-inline">
                <Bounce cascade triggerOnce damping={0.1}>
                    {employer.tools.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
                </Bounce>
            </ul>
        </>}
    </>;

    return (<Page
        title={employer.name}
        subtitle={employer.title}
        content={content}
        link={employer.link}
        description={description}
        sidebar={sidebar}>
        <Helmet>
            <title>{`${employer.name} @ ${employer.title} - Jarno van Wezel - Software Engineer - Rotterdam`}</title>
        </Helmet>
        <Portfolio items={ProjectsMapped.filter(project => project.employerSlug === slug)} />
    </Page>);
}

export default Project;