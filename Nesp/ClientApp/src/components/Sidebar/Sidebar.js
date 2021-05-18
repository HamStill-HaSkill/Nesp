import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavItem, NavLink } from 'reactstrap';
import {Route } from 'react-router-dom';

import Dropdown from "./Dropdown";
import Subscribe from "./Subscribe";
import AddRSS from './AddRSS';
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  let [subs, setSubs] = useState(['Telegram', 'Tut.by', 'Onliner', 'YouTube'])


  let unSub = () => {

  }

  let sub = subs.map(title => <Subscribe key={title} sub={title} onClick={unSub} />)
  return (
    // Pass on our props
    <Menu {...props}>
      <Dropdown />
      {sub}
      <NavItem className="list">
            <div className="form-inline"> 
                <NavLink tag={Link} className="text-dark" to="/rss">Add RSS</NavLink>
            </div>
      </NavItem>
      <Route exact path="/rss" component={() => <AddRSS />} />
    </Menu>
  );
};

export default Sidebar;
