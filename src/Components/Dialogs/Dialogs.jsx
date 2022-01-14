import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    Alina
                </div>
                <div className={s.dialog}>
                    Elena
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
            </div>
             
        
        
<div className={s.messages}>
<div  className={s.dialog}> Hello, my friend </div>
<div  className={s.dialog}> How are you? </div>
<div  className={s.dialog}> Yo </div>
</div>
</div>
    )
}

export default Dialogs;