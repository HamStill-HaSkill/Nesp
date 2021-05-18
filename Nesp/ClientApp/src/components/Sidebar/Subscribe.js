import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Subscribe = (props) => {
    let getRSS = () => {
        
    }
    return (
        <NavItem className="list">
            <div className="form-inline"> 
                <a tag={Link} className="text-dark" onClick={() => props.getRSS(props.sub)}>{props.sub}</a>
                <button className="btn btn-danger" onClick={() => props.unSub(props.sub)}>Unsubscribe</button>
            </div>
        </NavItem>
    )
}

export default Subscribe;