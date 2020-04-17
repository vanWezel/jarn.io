import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Intro from '../sections/Intro';
import Experience from '../sections/Experience';
import Work from '../sections/Projects';
import Contact from '../sections/Contact';
import './Home.css';

function Home() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        document.title = 'Jarno van Wezel - Software Engineer - Rotterdam';
    });

    return (<main>
        <Intro />

        <Experience />

        <Work />

        <Contact />
    </main>);
}

export default Home;
