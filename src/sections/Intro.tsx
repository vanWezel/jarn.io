import React from 'react';
import { useTranslation } from 'react-i18next';
import Typist from 'react-typist';
import 'react-typist/src/Cursor.scss';

function Intro() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n, ready } = useTranslation();
    
    return (<section id="home">
        <div className="container">
            <div className="row align-items-top">
                <div className="col-md-3">
                    <div className="text-center text-md-left">
                        <img src="images/jarno-van-wezel.jpg" srcSet="images/jarno-van-wezel.jpg, images/jarno-van-wezel@2x.jpg 2x" alt="Jarno van Wezel" className="avatar" />
                    </div>
                </div>

                <div className="col-md-9 triangle-left-md triangle-top-sm">
                    <div className="chat rounded bg-light">
                        <h1>
                            {ready && <Typist>
                                <span>{t('bubble.part1')}</span>
                                <Typist.Delay ms={1500} />
                                <br />
                                <br />
                                <span>{t('bubble.part2')}</span>
                                <Typist.Delay ms={1500} />
                                <br />
                                <br />
                                <span>{t('bubble.part3')}</span>
                            </Typist>}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="row justify-content-end">
                <div className="col-md-9">
                    <ul className="social-icons light list-inline mb-0 mt-4">
                        <li className="list-inline-item">
                            <a target="_blank" rel="noopener noreferrer" title="Let's connect!" href="https://www.linkedin.com/in/jarnovwezel/">
                                <i className="icon-social-linkedin"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" rel="noopener noreferrer" title="Let's collab!" href="https://github.com/vanwezel">
                                <i className="icon-social-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>);
}

export default Intro;