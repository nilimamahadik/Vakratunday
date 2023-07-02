import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import { Amplify, Auth } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);


function Signup() {
    const navigate = useNavigate()
  const [data, setData] = useState({});
  const [showVerificationForm, setShowVerificationForm] = useState(false);
  const [otpCode, setOtpCode] = useState("");

//   function onChangeData(e) {
//     setData((data) => ({
//       ...data,
//       [e.target.name]: e.target.value,
//     }));
//   }
  function onChangeData(e) {
    if (e.target.name === "otpCode") {
      setOtpCode(e.target.value);
    } else {
      setData((data) => ({
        ...data,
        [e.target.name]: e.target.value,
      }));
    }
  }



  async function onSubmitForm(e) {
    e.preventDefault();
    const { first_name, last_name, email, password, password_confirmation } = data
    try {
      // Sign up the user using AWS Cognito
      await Auth.signUp({
        username: email,
        password,
        password_confirmation,
        attributes: {
          given_name: first_name,
          family_name: last_name,

        },

      });

      // Registration successful, handle success logic
      setShowVerificationForm(true);
      navigate('/verify')
      // Optionally, you can redirect the user to a success page
      // or show a success message to the user
    } catch (error) {
      // Registration error, handle error logic
      console.log('Registration error', error);

      // Display an error message to the user or handle the error appropriately
    }

    // props.userLogout();
    // if (validateForm()) {
    //   props.requestRegister({
    //     data: {
    //       first_name: data.first_name,
    //       last_name: data.last_name,
    //       email: data.email,
    //       password: data.password,
    //       password_confirmation: data.password_confirmation
    //     },
    //   });
    //   setError(false)
    // } else {
    //   setError(true)
    // }
  }
 
  return (
    <>
      <div
        class=" modal form-modal"
        style={{ display: "block", height: "100%", overflow: "auto" }}
      >
        <div class="modal-dialog max-width-px-840 position-relative"></div>
        <div class="login-modal-main">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-3"></div>
            <div class="col-lg-4 col-md-6">
              <div class="row">
                <div class="heading">
                  <h3>
                    Create a free Account
                    <br />
                    For Candidates
                  </h3>
                  <p>
                    Create your account to continue <br /> and explore new jobs.
                  </p>
                </div>


                <form onSubmit={onSubmitForm}>
                  <div class="form-group">
                    <label for="first_name" class="label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      id="first_name"
                      name="first_name"
                      value={data.first_name}
                      onChange={onChangeData}
                    // onBlur={validateFname}
                    />
                    {/* {errorfirst_name && (
                    <div style={mystyle}>{errorfirst_name}</div>
                  )} */}
                  </div>
                  <div class="form-group">
                    <label for="last_name" class="label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      id="last_name"
                      name="last_name"
                      value={data.last_name}
                      onChange={onChangeData}
                    // onBlur={validateLname}
                    />
                    {/* {errorlast_name && (
                    <div style={mystyle}>{errorlast_name}</div>
                  )} */}
                  </div>


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
                  <div class="form-group">
                    <label for="password_confirmation" class="label">
                      Confirm Password
                    </label>
                    <div class="position-relative">
                      <input
                        type="password"
                        class="form-control"
                        id="password_confirmation"
                        placeholder="Enter Confirm password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={onChangeData}
                      // onBlur={validateCPassword}
                      />
                      {/* {errorpassword_confirmation && (
                      <div style={mystyle}>{errorpassword_confirmation}</div>
                    )} */}
                    </div>
                  </div>
                  <div class="form-group mb-8 button">
                    <button class="btn ">Sign Up</button>
                  </div>
                  <p class="text-center create-new-account">
                    Already have an account?{" "}
                    <a href="/signin">Login to your account</a>
                  </p>
                </form>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
