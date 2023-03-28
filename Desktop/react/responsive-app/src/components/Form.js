import React, { useState } from 'react'
import { auth } from '../config/firebase'
import {createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export default function Form(props) {

    const [formData ,setFormData] = React.useState({
        email : "",
        password :""
    })
    const[username , setUsername] = useState(auth?.currentUser?.email)

    async function signIn(event) {
        event.preventDefault()
        try {
           await createUserWithEmailAndPassword(auth, formData.email, formData.password);
           setUsername(formData.email)
        }
        catch(err){
            console.error(err)
        }
    }

    async function signOut(event) {
        try {
           await signOut(auth);
           setUsername("")
        }
        catch(err){
            console.error(err)
        }
    }

    function handleChange(event) { 
        const {name,value} = event.target
        setFormData(prev => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    return (
        <div className='forms'>
            <form className='form'>
                <input
                    type="text"
                    name = "email"
                    placeholder='Email'
                    value={formData.email}
                    onChange = {handleChange}
                />
                 <input
                    type="text"
                    name = "password"
                    placeholder='password'
                    value={formData.password}
                    onChange = {handleChange}
                />
                <input type="submit" value="Sign in" onClick={signIn}/>
                <input type="submit" value="Sign out" onClick={signOut}/>
                
                <h1>{username ? username : "Check"}</h1>
            </form>
        </div>
    )
}