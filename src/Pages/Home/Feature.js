import React from 'react'
import classes from "./Feature.module.css"
import page1 from "./../../aset/comic-page/kanojo-oka (1).jpg"
import Button from '../../UI/Button'
import CardPage from '../../UI/CardPage'
import imgchar from "./../../aset/chars.png"

function Feature() {
    return (
        <div className={classes.feature}>
            <div className={classes.header}>
                <h1>Trending</h1>
                <p>Check out the current trending manga title and see the description and
                    reviews by other people</p>
            </div>
            <div className={classes.featwrap}>
                <div className={classes.col1}>
                
                    {/* <div className={classes.cardContainer}>
                        <div className={classes.cardCol}>
                            <CardPage>
                                <div className={classes.img}>
                                    <img src={page1} alt=""/>
                                </div>
                                <div className={classes.content}>
                                    <Button>1. Kanojo Okarishimasu</Button>
                                </div>
                            </CardPage>

                        </div>
                        <div className={classes.cardCol}>
                            <CardPage>
                                <div className={classes.img}>
                                    <img src={page1} alt=""/>
                                </div>
                                <div className={classes.content}>
                                    <Button>2. Kanojo Okarishimasu</Button>
                                </div>
                            </CardPage>
                        </div> */}
                        {/* <div className={classes.cardCol}>
                    <CardPage>
                        <div className={classes.img}>
                            <img src={page1} alt=""/>
                        </div>
                        <div className={classes.content}>
                            <Button>3. Kanojo Okarishimasu</Button>
                        </div>
                    </CardPage>
                </div>
                <div className={classes.cardCol}>
                    <CardPage>
                        <div className={classes.img}>
                            <img src={page1} alt=""/>
                        </div>
                        <div className={classes.content}>
                            <Button>4. Kanojo Okarishimasu</Button>
                        </div>
                    </CardPage>
                </div> */}
                    </div>
                {/* </div> */}
                <div className={classes.col2}>
                    <img width="100%" src={imgchar} alt=""/>
                </div>
            </div>

            <div>
                {/* <p>Need more recomendation ? checkout other review <a href="">here</a></p> */}
            </div>

        </div>
    )
}

export default Feature
