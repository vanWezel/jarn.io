import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRouteMatch, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
    const match = useRouteMatch();
    const { t, i18n } = useTranslation();
    const language = i18n.language === 'en-US' ? 'NL' : 'EN';
    const to = language === 'NL' ? 'nl-NL' : 'en-US';

    return (<header className="desktop-header-2 d-flex align-items-start flex-column justify-content-between d-print-none">
        <nav>
            <ul className="vertical-menu scrollspy">
                {!match.isExact && <li><Link to="/" title="Home"><i className="icon-home"></i></Link></li>}
                {match.isExact && <>
                    <li><AnchorLink href="#home" title="Home"><i className="icon-home"></i></AnchorLink></li>
                    <li><AnchorLink href="#experience" title={t('experience')}><i className="icon-briefcase"></i></AnchorLink></li>
                    <li><AnchorLink href="#projects" title={t('projects.title')}><i className="icon-grid"></i></AnchorLink></li>
                    <li><AnchorLink href="#contact" title={t('contact.title')}><i className="icon-envelope-open"></i></AnchorLink></li>
                </>}
            </ul>
        </nav>

        <div className="footer">
            <span className="copyright">© 2021 Jarno van Wezel</span>
            <Link onClick={() => i18n.changeLanguage(to)} className='language-switch'>{language}</Link>
        </div>
    </header>);
}

export default Header;