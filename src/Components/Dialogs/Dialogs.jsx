import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.dialog}> {props.message} </div>
}
const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Olya' },
        { id: 2, name: 'Boris' },
        { id: 3, name: 'Alina' },
        { id: 4, name: 'Elena' },
        { id: 5, name: 'Ivan' },
        { id: 6, name: 'Vladimir' },
    ]

    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Hello, my friend' },
        { id: 5, message: 'YO' },
        { id: 6, message: 'Good evening' },
    ]
    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages
        .map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;