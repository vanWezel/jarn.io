import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Page.css';

interface PageProps {
    title: string;
    subtitle?: string|ReactNode;
    content: React.ReactNode;
    description?: string;
    sidebar?: React.ReactNode;
    children?: React.ReactNode;
}

function Page(props: PageProps) {  
    return (<main>
        <Helmet>
            {props.description && <meta name="description" content={props.description} />}
        </Helmet>

        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
                <div className="page-home d-lg-none">
                    <Link to="/" title="Home"><i className="icon-home"></i></Link>
                </div>

                <div className="rounded bg-light page-content">
                    <div className="row justify-content-between">
                        <div className="col-xl-8">
                            <div className="page-text">
                                <h1>{props.title}{props.subtitle && <small>{props.subtitle}</small>}</h1>
                                {props.content}
                            </div>
                        </div>

                        <div className="col-xl-4 content-right">
                            {props.sidebar}
                        </div>
                    </div>
                </div>

                {props.children}
            </div>
        </div>
    </main>);
}

export default Page;
