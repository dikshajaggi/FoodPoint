import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserContext } from '../utilities/context/UserContext'
import "./LoginStyles.css"

const Login = () => {

    const username = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items)
    const [loginValue, setLoginValue] = useState(username.user)

    const changeUsername = (e) => {
        setLoginValue(e.target.value)
        console.log(e.target.value)
    }

    const login = (e) => {
        console.log(e)
        e.preventDefault()
        console.log(loginValue, "login value")
        username.setUser(loginValue)
        console.log("loginvalue", loginValue)
        if (loginValue === "") username.setUser(username.user)
    }

    return (
        <div className='wrapper'>
            {cartItems.length !== 0 ? <h6>Login to proceed</h6> : ""}
            <div className="container" >
                <h2 className="login-title" > Log in</h2>
                <form className="login-form" >
                    <div>
                        <label for="name">Name </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Eren Buruk"
                            name="name"
                            onChange={(e) => changeUsername(e)}
                            required
                        />
                    </div>

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

                    <button className="btn btn--form" type="submit" value="Log in" onClick={(e) => login((e))}>
                        <Link to="/" style={{ textDecoration: 'none' }}>Log in</Link>
                    </button >
                    <p>New user? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link></p>
                </form >
            </div >
        </div>
    )
}

export default Login
