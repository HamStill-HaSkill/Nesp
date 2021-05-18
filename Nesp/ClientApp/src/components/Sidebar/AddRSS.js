import React, { useState } from 'react'
import style from '../Auth/UserAuth.module.css'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const AddRSS = (props) => {
    const [name, setName] = useState("");
    const [URL, setURL] = useState("");

    let add = () => {
        props.addRSS(name, URL);
    }
    return (
        <div className={style.modal}>
            <div className={style.modal_content}>
                <div className={style.modal_body}>
                    <div className="col-md-8">
                        <input className="form-control" placeholder="Name" onChange={e => setName(e.target.value)} id={style.modal_input} required />
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" placeholder="RSS URL" onChange={e => setURL(e.target.value)} id={style.modal_input} required />
                    </div>
                </div>
                <div className="modalFooter">
                    <div className="form-inline" id={style.modal_btn}>
                        <button type="button" className="btn btn-success" onClick={add} id={style.table_btn_log}>
                            <NavItem className="list">
                                <NavLink tag={Link} className="text-dark" to="/">Add</NavLink>
                            </NavItem>
                        </button>
                        <button type="button" className="btn btn-danger" id={style.table_btn_log}>
                            <NavItem className="list">
                                <NavLink tag={Link} className="text-dark" to="/">Cansel</NavLink>
                            </NavItem>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRSS;