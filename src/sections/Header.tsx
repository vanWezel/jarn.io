import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
    const match = useRouteMatch();
    const { t } = useTranslation();

    return (<header className="desktop-header-2 d-flex align-items-start flex-column">
        <div className="site-logo">
            <Link to="/" title="Home">J.io</Link>
        </div>

        {match.isExact && <nav>
            <ul className="vertical-menu scrollspy">
                <li><AnchorLink href="#home" title="Home"><i className="icon-home"></i></AnchorLink></li>
                <li><AnchorLink href="#experience" title={t('experience')}><i className="icon-graduation"></i></AnchorLink></li>
                <li><AnchorLink href="#projects" title={t('projects.title')}><i className="icon-layers"></i></AnchorLink></li>
                <li><AnchorLink href="#contact" title={t('contact.title')}><i className="icon-bubbles"></i></AnchorLink></li>
            </ul>
        </nav>}

        <div className="footer">
            <span className="copyright">© 2020 Jarno van Wezel.</span>
        </div>
    </header>);
}

export default Header;