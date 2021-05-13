import React from 'react';
import { NavLink } from 'react-router-dom'
import style from './news.module.css';

const NewsBox = (props) => {
    return (
        <NavLink className="text-dark" to={props.n.link}>
            <div className={style.news}>
                <img className={style.news_img} src={props.n.img} />
                <div>
                    <h1>{props.n.tittle}</h1>
                    <h3>{props.n.description}</h3>
                </div>
            </div>
        </NavLink>
    );
}

export default NewsBox;