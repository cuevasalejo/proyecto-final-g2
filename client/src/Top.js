// Top
import React from 'react';

import IconZone from './components/IconZone.js'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'

function Top() {
    return (
        <React.StrictMode>
            <IconZone />
            <Header />
            <Navbar />
            <Main />
        </React.StrictMode>
    );
}
    
export default Top;