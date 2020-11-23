import React from 'react'
import s from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.data.dialogData.map( dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} avatar={dialog.avatar}/>)

    let messageElements = props.data.messageData.map( message => <Message key={message.id} id={message.id} text={message.text}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                { dialogElements }
            </div>
            <div className = {s.messages}>
                <div className = {s.messageWrapper}>
                { messageElements }
                </div>
                <div className = {s.writeMessage}>
                    <textarea placeholder='Type your message...' className = {s.writeMessageTextarea}></textarea>
                    <button className = {s.writeMessageButton} type="submit">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs