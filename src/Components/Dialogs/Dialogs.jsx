import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Olya</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/2">Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Alina</NavLink> 
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4"> Elena</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5"> Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/6"> Vladimir</NavLink>
                </div>
            </div>



            <div className={s.messages}>
                <div className={s.dialog}> Hello, my friend </div>
                <div className={s.dialog}> How are you? </div>
                <div className={s.dialog}> Yo </div>
            </div>
        </div>
    )
}

export default Dialogs;