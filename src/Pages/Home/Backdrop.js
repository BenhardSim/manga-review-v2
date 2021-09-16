import React from 'react'
import classes from "./Backdrop.module.css"
import RegCard from '../../UI/RegCard'
import Login from './Login'
import Signin from './Signin'

function Backdrop({loginHandler,login,signin}) {
    return (
        <>
        <div onClick={loginHandler} className={classes.backdrop}>
            
        </div>
        <RegCard>
            {login && <Login />}
            {signin && <Signin />}
        </RegCard>
        </>
    )
}

export default Backdrop
