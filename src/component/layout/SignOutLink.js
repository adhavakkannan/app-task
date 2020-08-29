import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLink = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
        </div>
    )
}

export default SignOutLink