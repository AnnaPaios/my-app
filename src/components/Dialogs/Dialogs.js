import React from 'react';
import s from './dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}><NavLink to={"/dialogs/" + `${props.id}`}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='Dima' id='1'/>
                <DialogsItem name='Sasha' id='2'/>
                <DialogsItem name='Ivan' id='3'/>
                <DialogsItem name='Anya' id='4'/>
                <DialogsItem name='Vitya' id='5'/>
                <DialogsItem name='Seva' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='Hehau'/>
            </div>
        </div>
    )
}

export default Dialogs;