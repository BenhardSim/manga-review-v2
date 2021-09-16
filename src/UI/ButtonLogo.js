import React from 'react'
import classes from "./ButtonLogo.module.css"

function ButtonLogo(props) {
    return (
        <>
            <button className={classes.button}>
            {props.children}
            </button>
        </>
    )
}

export default ButtonLogo
