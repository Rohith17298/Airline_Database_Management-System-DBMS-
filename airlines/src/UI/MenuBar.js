import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././Images/aeroplane.jpg';
import './MenuBar.css';

function MenuBar() {
    return <div className="menu-bar">
        <div>
            <Link to="/"><img src={logo} alt="Aeroplane" width="217px" height="63px"/></Link>
        </div>
        <div>
            <Link to="/help">Help</Link>
        </div>
        <div>
            <Link to="/great-deals">Great Deals</Link>
        </div>
        <div>
            <Link to="/contact">Contact</Link>
        </div>
    </div>;
}
export default MenuBar;