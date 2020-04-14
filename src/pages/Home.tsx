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
    });

    return (<main>
        <Intro />

        <Experience />

        <Work />

        <Contact />

        <div className="spacer" style={{ height: 96 }}></div>
    </main>);
}

export default Home;
