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

   
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)
    
let newMessageElement = React.createRef();
let addMessage =() =>{
    props.addMessage();
   };
let onMessageChange = () =>{
    let newMessage = newMessageElement.current.value;
    props.updateNewMessage(newMessage);
};

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange = {onMessageChange} ref={newMessageElement} value={props.message}/>
                <div>
                <button onClick = { addMessage }>add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;