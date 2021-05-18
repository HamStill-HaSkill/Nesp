import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import style from './UserAuth.module.css'
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let onLoginChange = (e) => {
        let body = e.target.value;
        setUsername(body);
    }

    let onPasswordChange = (e) => {
        let body = e.target.value;
        setPassword(body);
    }


    let register = () => {
        props.register(username, password);
    }

    return (
        <div className={style.modal}>
            <div className={style.modal_content}>
                <div className={style.modal_header}>
                    <h1>Регистрация</h1>
                </div>
                <div className={style.modal_body}>
                    <div className="col-md-8">
                        <input className="form-control" placeholder="Логин" 
                        value={username} onChange={onLoginChange}  id={style.modal_input} required />
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" type="password" placeholder="Пароль"
                         value={password} onChange={onPasswordChange} id={style.modal_input} required />
                    </div>
                    {/* <div className="col-md-8">
                        <input className="form-control" type="password" placeholder="Повторить пароль" id={style.modal_input} required />
                    </div> */}
                </div>
                <div className="modalFooter">
                    <div className="form-inline" id={style.modal_btn}>
                        <button type="button" className="btn btn-primary" id={style.table_btn} onClick={register}> 
                            <NavItem className="list">
                                <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
                            </NavItem>
                        </button>
                        <button type="button" className="btn btn-danger" id={style.table_btn_log}>
                            <NavItem className="list">
                                <NavLink tag={Link} className="text-dark" to="/">Exit</NavLink>
                            </NavItem>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;