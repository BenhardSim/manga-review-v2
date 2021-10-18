import React from 'react'
import classes from "./Feature.module.css"
import page1 from "./../../aset/comic-page/kanojo-oka (1).jpg"
import Button2 from '../../UI/Button2'
import CardPage from '../../UI/CardPage'
import imgchar from "./../../aset/chars.png"

function Feature() {
    return (
        <div className={classes.feature}>
            <div className={classes.header}>
                <h1>Now Trending</h1>
                <p>Check out the current trending manga title and see the description and
                    reviews by other people</p>
            </div>
            <div className={classes.container}>
                <div className={classes.column}>
                    <div className={classes.card}>
                        <div className={classes.manimg}>
                            <img src={page1} alt=""/>
                        </div>
                        <div className={classes.content}>
                        <h2>Kanojo Okarishimasu</h2>
                        <p>this is a short description about the 
                            <br /> manga this is a short description <br /> about
                            the manga</p>
                        <Button2>lets go</Button2>
                        </div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.card}>
                        <div className={classes.manimg}>
                            <img src={page1} alt=""/>
                        </div>
                        <div className={classes.content}>
                        <h2>Kanojo Okarishimasu</h2>
                        <p>this is a short description about the 
                            <br /> manga this is a short description <br /> about
                            the manga</p>
                            <Button2>lets go</Button2>
                        </div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.card}>
                        <div className={classes.manimg}>
                            <img src={page1} alt=""/>
                        </div>
                        <div className={classes.content}>
                        <h2>Kanojo Okarishimasu</h2>
                        <p>this is a short description about the 
                            <br /> manga this is a short description<br />  about
                            the manga</p>
                            <Button2 className={classes.extra}>lets go</Button2>
                        </div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.card}>
                        <div className={classes.manimg}>
                            <img src={page1} alt=""/>
                        </div>
                        <div className={classes.content}>
                        <h2>Kanojo Okarishimasu</h2>
                        <p>this is a short description about the 
                            <br /> manga this is a short description<br />  about
                            the manga</p>
                            <Button2 className={classes.extra}>lets go</Button2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Feature
