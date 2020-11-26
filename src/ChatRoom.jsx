import React from 'react';
import { auth, firestore } from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from './ChatMessage';

const ChatRoom = () => {

    // from the firestore database, we watch the messages collection 
    const messagesRef = firestore.collection('messages');

    // firestore.collection('messages').get()
    //     .then(snapshot => console.log(snapshot))
    //     .catch(error => console.log(error));

    // console.log(messagesRef);
    // create  a Query object which ask the documents in the messages collection
    const query = messagesRef.orderBy('createdAt').limit(25);
    // listen the query (the data) in real time
    const [messages] = useCollectionData(query, { idField: 'id' }); // the {} is an object destructor, it is the "options" parameter

    console.log(messages);
    messages && console.log(messages[0]);

    return (
        <div>
            {/* if not null, iterate over the messages array, and create CahtMessage components, msg goes into props.message */}
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        </div>

    )
}

export default ChatRoom;
