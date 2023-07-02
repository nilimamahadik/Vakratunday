import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Signup from './Signup';
import Verify from './otp_verify';
import Signin from './Signin';
import { Signout } from './Signout';

import FormExample from './form';
import Poster from './poster';




const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Signup />,
  // },
  // {
  //   path: "/verify",
  //   element: <Verify />,
  // },
  // {
  //   path: "/signin",
  //   element: <Signin />,
  // },
  // {
  //   path:"/signout",
  //   element: <Signout />,
  // },
   {
    path:"/",
    element:< FormExample/>,
  },
  {
    path:"/poster/:id",
    element:< Poster/>,
  }
  

]);


export default router;
