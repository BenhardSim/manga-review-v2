import React from 'react'
import Button from '../../UI/Button'
import Logo from "./../../aset/nav-logo.png"
import classes from "./Navbar.module.css"

function Navbar({loginHandler,signinHandler}) {
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <img height="200%" src={Logo} alt=""/>
            </div>
            <div className={classes.menu}>
                <p>Home</p>
                <p>Genre</p>
                <p>Favorite</p>
                <p>Reviews</p>
                <p>Trending</p>
            </div>
            <div className={classes.button}>
                <Button onClick={loginHandler} >Log In</Button>
                <Button onClick={signinHandler}>Sign In</Button>
            </div>
        </nav>
    )
}

export default Navbar
