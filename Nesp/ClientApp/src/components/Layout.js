import React from 'react';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar/Sidebar'
import './Sidebar/styles.css'

const Layout = () => {

    return (
        <div id="Layout">
            <Sidebar pageWrapId={"page-wrap"} outerContainerId={"Layout"} />
            <NavMenu />
        </div>
    );
}

export default Layout;