import React from 'react';
import { auth, firestore } from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const ChatRoom = () => {

    // from the firestore database, we watch the messages collection 
    const messagesRef = firestore.collection('messages');
    // create  a Query object which ask the documents in the messages collection
    const query = messagesRef.orderBy('createdAt').limit(25);
    // listen the query (the data) in real time
    const [messages] = useCollectionData(query, { idField: 'id' }); // the {} is an object destructor, it is the "options" parameter




    return (
        <div>
            {/* if not null, iterate over the messages array, and create CahtMessage components */}
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>
    )
}

export default ChatRoom;
