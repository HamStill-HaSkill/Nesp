import React, {useEffect, useState} from "react";
import { slide as Menu } from "react-burger-menu";

import Dropdown from "./Dropdown";
import Subscribe from "./Subscribe";

const Sidebar = (props) => {
  let [subs, setSubs] = useState(['Telegram', 'Tut.by', 'Onliner','YouTube'])
 

  let unSub = () => {
    
  }

  let sub = subs.map(title => <Subscribe key={title} sub={title} onClick={unSub}/>)
  return (
    // Pass on our props
    <Menu {...props}>
      <Dropdown />
      {sub}
    </Menu>
  );
};

export default Sidebar;
