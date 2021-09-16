import React from 'react'
import Button from '../../UI/Button'
import classes from "./Welcome.module.css"
function Welcome() {
    return (
        <div className={classes.welcome}>
            <div className={classes.content}>
                <h1>Find your Favorite <br /> Type of Manga</h1>
                <p>Search your favorite mangas <br /> with acurate review and detail information</p>
                <Button>Explore</Button>
            </div>

        </div>
    )
}

export default Welcome
