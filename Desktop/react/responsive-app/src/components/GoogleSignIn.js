import React, { useEffect } from 'react'
import {auth, googleProvider} from "../config/firebase"
import { signInWithPopup, signOut} from 'firebase/auth'
import { async } from '@firebase/util'

export default function GoogleSignIn(props) {

    const[username, setUsername] = React.useState("")
    const[profileImage, setProfileImage] = React.useState(auth?.currentUser?.photoURL)

     console.log(auth.currentUser)

    async function signInWithGoogle() {
        try{
            await signInWithPopup(auth,googleProvider)
            setUsername(auth.currentUser.displayName)
            setProfileImage(auth?.currentUser?.photoURL)
        }catch(err){
            console.error(err)
        }
    }

    async function logout(){
        try {
            await signOut(auth);
            setUsername("")
            setProfileImage(false)
            console.log(auth.currentUser)
            console.log(auth?.currentUser?.displayName)
        }
        catch(err){
            console.error(err);
        }
    }
    
    async function handleSubmit(event) {
        await event.preventDefault()
    }

    return(
        <div className='google-sign-in'>
           <form onSubmit = {handleSubmit} className='google-forms'>
             <input type='submit' value="sign in with google" onClick={signInWithGoogle} />
            <h1>{username ? username : "sign in"}</h1>
            <h1>{profileImage ? <img src={profileImage} />: ""} </h1>
           </form>
           {profileImage ? <button  onClick={logout}>Log Out</button> : ""}
        </div>
    )
}