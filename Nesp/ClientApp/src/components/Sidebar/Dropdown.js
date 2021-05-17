import React from 'react';
import style from "./Sidebar.module.css"

const Dropdown = (props) => {

    const start = "Ожидание начала";
    const progress = "В процессе";
    const complete = "Готово";

    let onStatusClick = (text) => {
        props.updateTaskStatus(text);
    }

    let onStatusChange = (e) => {
        let text = e.target.value
        props.updateTaskStatus(text);
    }

    return (
        <div className="form-inline">
            <div className="form-group">
                <div className="col-md-6">
                    <div className={style.dropdown}>
                        <button className="btn btn-default" id="border-btn">Подписки</button>
                        <div className={style.dropdown_content}>
                            <a onClick={() => onStatusClick(start)}>YouTube</a>
                            <a onClick={() => onStatusClick(progress)}>Tut.by</a>
                            <a onClick={() => onStatusClick(complete)}>Onliner</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;