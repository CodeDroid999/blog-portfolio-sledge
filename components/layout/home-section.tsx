import React from 'react';
import Alert from '../alert';
import Navbar from './navbar';
import CustomNavbar from './navbar';

const Home: React.FC = () => {
    return (
        <header id="home" className="header_section">
            <div className="header_top">
                <Alert />
            </div>
            <div className="header_bottom">
                <CustomNavbar />
            </div>
        </header>
    );
};

export default Home;
