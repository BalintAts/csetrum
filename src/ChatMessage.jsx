import React from 'react'
import { auth } from './App';
import './styles/ChatMessageStyle.css';

export const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;

    //ternary magic, string according to codition
    const sendRecieved = uid === auth.currentUser.userId ? "sent" : "received";

    return (
        // <div className={{ sendRecieved }}>
        <div className="sent">

            <img src={photoURL} />
            <p>{text}</p>
        </div>
    )
}

