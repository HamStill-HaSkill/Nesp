import React from 'react'
import style from '../Auth/UserAuth.module.css'

const AddRSS = () => {
    return (
        <div className={style.modal}>
        <div className={style.modal_content}>
            <div className={style.modal_body}>
                <div className="col-md-8">
                    <input className="form-control" placeholder="RSS URL" id={style.modal_input} required />
                </div>
            </div>
            <div className="modalFooter">
                <div className="form-inline" id={style.modal_btn}>
                    <button type="button" className="btn btn-success" id={style.table_btn}> Add </button>
                    <button type="button" className="btn btn-danger" id={style.table_btn_log}> Cancel </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddRSS;