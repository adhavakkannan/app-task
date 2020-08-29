import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux"


import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink';

const NavBar = () =>{
  const selector = useSelector(state=>state);
  //console.log(selector.auth.isLoggedIn);
    return (
      <nav>
        <div className=" nav-wrapper grey darken-2">
          <div className="container">
            <Link to="/" className="brand-logo">
              E-Data
            </Link>
            {selector.auth.isLoggedIn ? <SignInLink /> : <SignOutLink />}

            {/* <SignInLink/>
            <SignOutLink/> */}
          </div>
        </div>
      </nav>
    );
}


export default NavBar