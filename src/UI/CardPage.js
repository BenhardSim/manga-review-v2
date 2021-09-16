import React from 'react'
import classes from "./CardPage.module.css"

function CardPage(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default CardPage
