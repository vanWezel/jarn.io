import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

import Intro from '../sections/Intro';
import Experience from '../sections/Experience';
import Work from '../sections/Projects';
import Contact from '../sections/Contact';
import './Home.css';

function Home() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    });

    return (<main>
        <Helmet>
            <title>Jarno van Wezel - Software Engineer - Rotterdam</title>
            <meta name="description" content="Hoi, ik ben Jarno. Een Software Engineer uit Rotterdam. Welkom op mijn digitale cv!" />
        </Helmet>

        <Intro />

        <Experience />

        <Work />

        <Contact />
    </main>);
}

export default Home;
