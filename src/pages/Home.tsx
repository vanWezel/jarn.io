import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Intro from '../sections/Intro';
import Experience from '../sections/Experience';
import Work from '../sections/Projects';
import Contact from '../sections/Contact';
import './Home.css';

function Home() {
    return (<React.Fragment>
        <main>
            <Intro />

            <Experience />

            <Work />

            <Contact />

            <div className="spacer" style={{ height: 96 }}></div>
        </main>

        <AnchorLink href="#home">
            <i className="fas fa-arrow-up"></i>
        </AnchorLink>
    </React.Fragment>);
}

export default Home;
