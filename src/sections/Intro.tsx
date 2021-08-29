import React from 'react';
import { useTranslation } from 'react-i18next';
import {Fade} from "react-awesome-reveal";
import {OutboundLink} from "react-ga";
import ReactMarkdown from "react-markdown";

function Intro() {
    const { t } = useTranslation();
    const lines = [1,2,3];

    return (<section id="home">
        <div className="container">
            <div className="row align-items-top">
                <div className="col-md-3">
                    <div className="text-center text-md-left">
                        <img src="images/jarno-van-wezel.jpg" srcSet="images/jarno-van-wezel.jpg, images/jarno-van-wezel@2x.jpg 2x" alt="Jarno van Wezel" className="avatar" />
                    </div>
                </div>

                <div className="col-md-9">
                    {lines.map((i, line) => <Fade direction="top" triggerOnce={true} delay={( i > 1 ? i * 300 : 0)}>
                        <span className={`chat bg-light ${i === 3 ? 'triangle-top-sm triangle-left-md' : ''}`}>
                            <ReactMarkdown source={t(`bubble.part${i}`)} renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}/>
                        </span>
                    </Fade>)}
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