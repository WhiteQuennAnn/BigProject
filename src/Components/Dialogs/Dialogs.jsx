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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Olya" id="1" />
                <DialogItem name="Sergey" id="2" />
                <DialogItem name="Alina" id="3" />
                <DialogItem name="Elena" id="4" />
                <DialogItem name="Ivan" id="5" />
                <DialogItem name="Vladimir" id="61" />
           </div>

            <div className={s.messages}>
            <Message message="Hello"/>
                <Message message="Yo"/>
                <Message message="How are you?"/>
                <Message message="Hello, my friend"/>
                <Message message="Yo"/>
                <Message message="Good evening"/>
            </div>
        </div>
    )
}

export default Dialogs;