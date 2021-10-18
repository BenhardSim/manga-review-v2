import React from 'react'
import classes from "./Button.module.css"

function Button2({children,onClick}) {
    return (
        <button className={classes.button2} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button2
