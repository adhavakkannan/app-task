import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SignInLink extends Component {
    render() {
        return (
            <div>
                <ul className="right">
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/logout'>Logout</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default SignInLink;