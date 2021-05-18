import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Subscribe = (props) => {
    return (
        <NavItem className="list">
            <div className="form-inline"> 
                <NavLink tag={Link} className="text-dark" to="/youtube">{props.sub}</NavLink>
                <button className="btn btn-danger">Unsubscribe</button>
            </div>
        </NavItem>
    )
}

export default Subscribe;