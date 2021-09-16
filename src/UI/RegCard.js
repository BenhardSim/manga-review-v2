import React from 'react'
import classes from "./RegCard.module.css"

function RegCard(props) {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

export default RegCard
