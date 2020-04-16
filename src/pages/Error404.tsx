import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.scss';

function Error404() {
    return (<div className="container error">
        <div className="overlay"></div>
        <div className="scanline"></div>
        <div className="wrapper">
            <div className="content">
                <header>
                    <h1>Jarno van Wezel <br />
                        - Software Engineer @ Rotterdam -
                    </h1>
                    <p>----------------------------------------</p>
                    <p>- build 2868 - server 7595 -</p>
                </header>

                <p>Welcome to the 404 error page. The page you are looking for can not be found. This incident will be reported.</p>
                <p className="clear"><br /></p>

                <nav className="site clear">
                    <ul>
                        <li><Link to="/" title="Return to Home">Return Home</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>);
}

export default Error404;
