import React from 'react';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar/Sidebar'
import './Sidebar/styles.css'

const Layout = (props) => {

    return (
        <div id="Layout">
            <Sidebar pageWrapId={"page-wrap"} unSub={props.unSub} outerContainerId={"Layout"} getRSS={props.getRSS} subs={props.subs} addRSS={props.addRSS}/>
            <NavMenu />
        </div>
    );
}

export default Layout;