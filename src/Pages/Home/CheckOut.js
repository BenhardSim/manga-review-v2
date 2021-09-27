import React from 'react'
import classes from "./CheckOut.module.css"
import img from "./../../aset/char-kon.png"
import Button from '../../UI/Button'

function CheckOut() {
    return (
        <section className={classes.checkout}>
            <div className={classes.content}>
                <div className={classes.container}>
                    <h1>See My Personal Recomendation</h1>
                    <p>Multiple Recomendation from every genre,
                        <br/>
                        Top 10 and Top 5 with accurate Review</p>
                    <Button className={classes.extra}>Check It Out !</Button>
                </div>
            </div>
            <div className={classes.charimg}>
                <img src={img} alt=""/>
            </div>
        </section>
    )
}

export default CheckOut
