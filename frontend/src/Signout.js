import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);


/**
* @author
* @function Signout
**/

export const Signout = (props) => {
    const navigate = useNavigate()


    async function listusers(e){
        e.preventDefault();
        navigate("/list")
    }

    async function signOut(e) {
        e.preventDefault();

        try {
            const out = await Auth.signOut();
            alert("Signout succesfully")
            navigate('/signin') 
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <div>
            <div><h2>Welcome</h2></div>
            <button type="submit" onClick={signOut}>Sign out</button>
        </div>
    )

}