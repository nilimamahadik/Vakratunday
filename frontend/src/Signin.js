import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

/**
* @author
* @function Signin
**/

const Signin = (props) => {
    const navigate = useNavigate()
    const [data, setData] = useState({})

    function onChangeData(e) {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    }

    async function signIn(e) {
        e.preventDefault();

        try {
            const user = await Auth.signIn(data.email, data.password);
            alert("Authentication completed")
            if(user){
                navigate('/signout')
            }
        } catch (error) {
            console.log('error signing in', error);
        }
    }


    return (
        <div>
             <form onSubmit={signIn}>
            <div class="form-group">
                <label for="email" class="label">
                    E-mail
                </label>
                <input
                    type="email"
                    class="form-control"
                    placeholder="example@gmail.com"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={onChangeData}
                // onBlur={validateEmail}
                />
                {/* {erroremail && <div style={mystyle}>{erroremail}</div>} */}
            </div>
            <div class="form-group">
                <label for="password" class="label">
                    Password
                </label>
                <div class="position-relative">
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        value={data.password}
                        onChange={onChangeData}
                    // onBlur={validatePassword}
                    />
                    {/* {errorpassword && (
                      <div style={mystyle}>{errorpassword}</div>
                    )} */}
                </div>

            </div>
            <div class="form-group mb-8 button">
                <button class="btn " type='submit'>Sign In</button>
            </div>
            <p class="text-center create-new-account">
                don't have an account?{" "}
                <a href="/">Create new account</a>
            </p>
        </form>
    </div>
    )

}
export default Signin;