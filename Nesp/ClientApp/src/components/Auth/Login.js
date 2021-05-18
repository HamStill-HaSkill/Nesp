import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import style from './UserAuth.module.css'


const Login = (props) => {

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

    let login = () => {
        props.login(username, password);
    }

    return (
        <div className={style.modal}>
            <div className={style.modal_content}>
                <div className={style.modal_header} >
                    <h1>Вход</h1>
                </div>
                <div className={style.modal_body}>
                    <div className="col-md-8">
                        <input className="form-control" placeholder="Логин" 
                         value={username} onChange={onLoginChange}   id={style.modal_input} required />
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" type="password" placeholder="Пароль"
                            value={password} onChange={onPasswordChange} id={style.modal_input} required />
                    </div>
                </div>
                <div className="modalFooter">
                    <div className="form-inline" id={style.modal_btn}>
                        <button type="button" className="btn btn-primary" id={style.table_btn} onClick={props.register}> Регистрация </button>
                        <button type="button" className="btn btn-success" id={style.table_btn_log} onClick={login}> Вход </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;