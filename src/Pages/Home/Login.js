import React from 'react'
import Button from '../../UI/Button'
import ButtonLogo from '../../UI/ButtonLogo'
import classes from "./Login.module.css"
import logo from "./../../aset/nav-logo.png"


function Login() {
    return (
        <>
             <div className={classes.form}>
                <h1>Log In</h1>
                <ButtonLogo><i class="fa fa-google" aria-hidden="true"></i></ButtonLogo>
                <ButtonLogo><i class="fa fa-facebook" aria-hidden="true"></i></ButtonLogo>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password" />
                    <Button>Submit</Button>
                </form>
            </div>
            <div className={classes.logo}>
                <img width="100%" src={logo} alt="" />
            </div>
        </>
    )
}

export default Login
