import logo from './logo.svg';
import './App.css';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <>
        {user ? <ChatRoom /> : <SignIn />}
        {/* (user can be object or null) */}
      </>
    </div>
  );
}

export default App;
