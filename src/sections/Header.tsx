import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';

function Header() {
    const match = useRouteMatch();

    return (<React.Fragment>
        <header className="desktop-header-2 d-flex align-items-start flex-column">
            <div className="site-logo">
                <Link to="/">J.io</Link>
            </div>

            {match.isExact && <nav>
                <ul className="vertical-menu scrollspy">
                    <li><AnchorLink href="#home"><i className="icon-home"></i></AnchorLink></li>
                    <li><AnchorLink href="#experience"><i className="icon-graduation"></i></AnchorLink></li>
                    <li><AnchorLink href="#works"><i className="icon-layers"></i></AnchorLink></li>
                    <li><AnchorLink href="#contact"><i className="icon-bubbles"></i></AnchorLink></li>
                </ul>
            </nav>}

            <div className="footer">
                <span className="copyright">© 2020 Jarno van Wezel.</span>
            </div>
        </header>
    </React.Fragment>);
}

export default Header;