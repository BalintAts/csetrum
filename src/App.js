import logo from './logo.svg';
import './App.css';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatRoom from './ChatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyBb1TX6Lozb9ipkX4Cbvl9JHEnW3M8RLU8",
  authDomain: "csetrum-13250.firebaseapp.com",
  databaseURL: "https://csetrum-13250.firebaseio.com",
  projectId: "csetrum-13250",
  storageBucket: "csetrum-13250.appspot.com",
  messagingSenderId: "411645516223",
  appId: "1:411645516223:web:5b0fc6fa3ba3941929a90a",
  measurementId: "G-EK810KDR84"

});

// references
export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {


  const [user] = useAuthState(auth);
  user && console.log("EMAIL: " + user.email);
  return (
    <div className="App">
      <section>
        {user ? (

          <>
            <h2>{`Signed in as ${user.email}`}</h2>
            <ChatRoom />
            <SignOut />
          </>) : <SignIn />}
        {/* <SignIn /> */}
        {/* (user can be object or null) */}
      </section>
    </div>
  );
}

export default App;
