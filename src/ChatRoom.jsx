import React, { useState, useEffect } from 'react';
import { auth, firestore } from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from './ChatMessage';
import './styles/roomStyle.css';

const ChatRoom = () => {

    // from the firestore database, we watch the messages collection 
    const messagesRef = firestore.collection('messages');

    // create  a Query object which ask the documents in the messages collection
    const query = messagesRef.orderBy('createdAt').limit(25);
    // listen the query (the data) in real time
    const [messages] = useCollectionData(query, { idField: 'id' }); // the {} is an object destructor, it is the "options" parameter
    // console.log(messages);

    const [formValue, setFormValue] = useState('');

    // const messagesA = [];

    // firestore.collection('messages')
    //     .get()
    //     .then(snapshot => snapshot.docs.forEach(doc => messagesA.add(doc)))
    //     .catch(error => console.log(error));

    const sendMessage = async (e) => {
        e.preventDefault();   //don't refresh the page
        const { uid, photoURL } = auth.currentUser;
        // console.log("uid: " + uid);
        await messagesRef.add({
            text: formValue,
            ctreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
        // console.log("uid: " + uid);
        setFormValue('');
    }



    return (
        <>
            <div className="chat">
                {/* if not null, iterate over the messages array, and create CahtMessage components, msg goes into props.message */}
                {/* {messagesA && messagesA.map(doc => <ChatMessage key={doc.data().id} message={doc} />)} */}
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            </div>
            <form onSubmit={sendMessage}>
                {/* <input value={formValue} onChange={(e) => setFormValue(e.target.value)} /> */}
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

                <button className="submit" type="submit"> Send</button>
            </form>
        </>
    )
}

export default ChatRoom;
