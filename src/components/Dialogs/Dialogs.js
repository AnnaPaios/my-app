import React from 'react';
import s from './dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
    let path = "/dialogs/" + `${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Anya' },
    { id: 5, name: 'Vitya' },
    { id: 6, name: 'Seva' },
]

let messageseData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Hehau' },
    { id: 4, message: 'HI' },
    { id: 5, message: 'Hello' },
    { id: 6, message: 'Hehau' },
]

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