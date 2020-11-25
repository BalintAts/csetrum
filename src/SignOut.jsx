import React from 'react';
import { auth } from './App';
import firebase from 'firebase/app';

const SignOut = () => {
    return (
        auth.currentUser && (
            <button onClick={() => auth.signOut}>Sign Out</button>
        )
    )
}

export default SignOut
