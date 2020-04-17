import React, { useState, useEffect } from 'react';
import './Project.css';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import Portfolio from '../components/Portfolio';
import Projects, {ProjectsMapped} from '../data/Projects';
import Employers from '../data/Employers';

function Project() {
    const { tag, slug } = useParams();
    const { t } = useTranslation();
    const [description, setDescription] = useState('');

    const history = useHistory();
    const projectsFilter = Projects.filter(project => project.url === history.location.pathname).map(item => {
        const employer = Employers[item.employerIndex];
        const techstack = employer.techstack.concat(item.techstack, item.extraTechstack);
        const tools = employer.tools.concat(item.tools);

        return {
            techstack,
            tools,
            employer: employer.name,
            name: item.name,
            image: item.image,
            image2x: item.image2x,
            description: item.description,
        };
    });
    
    const project = projectsFilter[0];

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);

        fetch(`/locales/nl/projects/${tag}/${slug}.md`).then(response => {
            response.text().then(text => setDescription(text));
        });
    }, [tag, slug]);

    useEffect(() => {
        document.title = `Project: ${project.name} - Jarno van Wezel - Software Engineer - Rotterdam`;
    }, [project]);

    return (<main>
        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
                <div className="project-home d-lg-none">
                    <Link to="/" title="Home"><i className="icon-home"></i></Link>
                </div>
                
                <div className="rounded bg-light project-content">
                    <div className="row justify-content-between">
                        <div className="col-xl-8">
                            <div className="project-text">
                                <h1>{project.name}</h1>
                                <h3>{project.employer}</h3>
                                {description && <ReactMarkdown source={description} />}
                                {!description && <p>{t('projects.loading')}</p>}
                            </div>
                        </div>

                        <div className="col-xl-4 content-right">
                            {project.techstack && <div>
                                <h4>{t('projects.tech-stack')}</h4>
                                <ul className="list-inline">
                                    <Bounce cascade triggerOnce damping={0.1}>
                                        {project.techstack.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
                                    </Bounce>
                                </ul>
                            </div>}

                            {project.tools && <div>
                                <h4>{t('projects.tools')}</h4>
                                <ul className="list-inline">
                                    <Bounce cascade triggerOnce damping={0.1}>
                                        {project.tools.map((item, index) => <li key={index} className="list-inline-item rounded list-item-bg">{item}</li>)}
                                    </Bounce>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>  
            
                <Portfolio items={ProjectsMapped.filter(project => project.url !== history.location.pathname)} />
            </div>
        </div>
    </main>);
}

export default Project;
