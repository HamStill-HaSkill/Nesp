import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavItem, NavLink } from 'reactstrap';
import {Route } from 'react-router-dom';

import Dropdown from "./Dropdown";
import Subscribe from "./Subscribe";
import AddRSS from './AddRSS';
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      {(props.subs ? props.subs  : []).map(title => <Subscribe key={title.name} unSub={props.unSub} sub={title.name} getRSS={props.getRSS} />)}
      <NavItem className="list">
            <div className="form-inline"> 
                <NavLink tag={Link} className="text-dark" to="/rss">Add RSS</NavLink>
            </div>
      </NavItem>
      <Route exact path="/rss" component={() => <AddRSS addRSS={props.addRSS} />} />
    </Menu>
  );
};

export default Sidebar;
