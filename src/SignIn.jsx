import React from 'react'
import { auth } from './App';
import firebase from 'firebase/app';

export const SignIn = () => {

    const signInWithGoogle = () => {
        // instatnitate a provider object
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

    }



    return (
        <div>
            <button onClick={signInWithGoogle} >Sign in with Google</button>
        </div>
    )
}
