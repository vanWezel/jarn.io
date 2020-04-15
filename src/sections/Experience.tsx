import React from 'react';
import { Fade } from 'react-awesome-reveal'; 
import { useTranslation } from 'react-i18next';
import Timeline from '../components/Timeline';
import ProgressBar from '../components/ProgressBar';

import Employers from '../data/Employers';
import Schools from '../data/Schools';
import Skills from '../data/Skills';

function Experience() {
    const { t } = useTranslation();

    return (<section id="experience">
        <div className="container">
            <Fade direction="top" triggerOnce={true} > 
                <h2 className="section-title">{t('experience')}</h2>
            </Fade>

            <div className="spacer"></div>

            <div className="row">
                <div className="col-md-6">
                    <div className="spacer d-md-none d-lg-none"></div>

                    <Timeline items={Employers.map((employer) => {
                        return {
                            period: employer.period,
                            name: employer.name,
                            location: employer.title
                        }
                    })} type="employers" />

                    <div className="spacer -half"></div>

                    <Timeline items={Schools} type="school" />

                    <div className="spacer d-lg-none"></div>
                </div>

                <div className="col-md-6">
                    {Skills.map((skill, index) => <ProgressBar label={skill.name} value={skill.value} key={index} />)}
                </div>
            </div>
        </div>
    </section>);
}

export default Experience;