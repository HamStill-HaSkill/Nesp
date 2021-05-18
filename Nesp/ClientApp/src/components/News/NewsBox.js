import React from 'react';
import { NavLink } from 'react-router-dom'
import style from './news.module.css';

const NewsBox = (props) => {
    return (
        <a className="text-dark" href={props.n.link}>
            <div className={style.news}>
                <div>
                    <h3>{props.n.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: props.n.description }} />
                </div>
            </div>
        </a>
    );
}

export default NewsBox;