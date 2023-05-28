import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginStyles.css"

const SignUp = () => {
    return (
        <div className='wrapper'>
            <div className="container" >
                <h2 className="login-title" >Sign up</h2>

                <form className="login-form" >
                    <div>
                        <label for="email">Email </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="me@example.com"
                            name="email"
                            required
                        />
                    </div>

                    <div>
                        <label for="password">Password </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="password"
                            name="password"
                            required
                        />
                    </div>

                    <div>
                        <label for="password">Confirm Password </label>
                        <input
                            id="confirm-password"
                            type="password"
                            placeholder="confirm password"
                            name="password"
                            required
                        />
                    </div>

                    <button className="btn btn--form" type="submit" value="sign up" >
                        <Link to="/login" style={{ textDecoration: 'none' }}>Sign up</Link>
                    </button >
                    <p>Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log in</Link></p>
                </form >
            </div >
        </div>
    )
}

export default SignUp
