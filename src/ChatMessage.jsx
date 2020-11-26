import React from 'react'
import { auth } from './App';
import './styles/ChatMessageStyle.css';

export const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;

    //ternary magic, string according to codition
    const sendRecieved = uid === auth.currentUser.userId ? "sent" : "received";
    console.log("uid: " + uid);
    console.log(sendRecieved);

    return (
        // <div className={{ sendRecieved }}>
        <div className="sent">

            <img src={photoURL} />
            <p>{uid}</p>
            <div className="textbox">
                <p>{text}</p>
            </div>
        </div>
    )
}

