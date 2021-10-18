import React, {useState} from 'react'
import Button from '../../UI/Button'
import Logo from "./../../aset/nav-logo.png"
import classes from "./Navbar.module.css"

function Navbar({loginHandler, signinHandler}) {
    const [genre,
        setGenre] = useState(false);

    const genreHandler = () => {
        console.log("hover");
        let temp = genre
        setGenre(!temp)

    }

    return (
        <nav>
            <div className={classes.nav}>
                <div className={classes.logo}>
                    <img height="200%" src={Logo} alt=""/>
                </div>
                <div className={classes.menu}>
                    <p>Home</p>
                    <p onClick={genreHandler}>Genre <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </p>
                    <p>Favorite</p>
                    <p>Reviews</p>
                    <p>Trending</p>
                </div>
                <div className={classes.button}>
                    <Button onClick={loginHandler}>Log In</Button>
                    <Button onClick={signinHandler}>Sign In</Button>
                </div>
            </div>
            {genre && <div className={classes.genre}>
                <div className={classes.finnish}>
                    <p>All</p>
                    <p>Complete</p>
                    <p>Ongoing</p>
                    <p>Ongoing</p>
                </div>
                <div className={classes.listcont}>
                    <div className={classes.listcol}>
                        <h1>A</h1>
                        <p>Action</p>
                        <p>Adventure</p>
                        <p>Adult</p>
                        <h1>C</h1>
                        <p>Comedy</p>
                        <p>Cooking</p>
                        <h1>D</h1>
                        <p>Drama</p>
                        <h1>E</h1>
                        <p>Ecchi</p>
                        <h1>F</h1>
                        <p>Fantasy</p>
                    </div>
                    <div className={classes.listcol}>
                        <h1>G</h1>
                        <p>Gender Bender</p>
                        <h1>H</h1>
                        <p>Harem</p>
                        <p>Historical</p>
                        <p>Horror</p>
                        <h1>I</h1>
                        <p>Isekai</p>
                        <h1>J</h1>
                        <p>Josei</p>
                        <h1>M</h1>
                        <p>Manhua</p>
                        <p>Manhwa</p>
                    </div>
                    <div className={classes.listcol}>
                        <p>Martial Arts</p>
                        <p>Mature</p>
                        <p>Mecha</p>
                        <p>Medical</p>
                        <p>Mystery</p>
                        <h1>O</h1>
                        <p>One Shot</p>
                        <h1>P</h1>
                        <p>Psychological</p>
                        <h1>R</h1>
                        <p>Romance</p>
                    </div>
                    <div className={classes.listcol}>
                        <h1>S</h1>
                        <p>School Life</p>
                        <p>Sci-fi</p>
                        <p>Seinen</p>
                        <p>Sports</p>
                        <p>Shoujo</p>
                        <p>Shoujo Ai</p>
                        <p>Shounen</p>
                        <p>Slice of life</p>
                        <p>Smut</p>
                        <p>Super Natural</p>
                        <h1>T</h1>
                        <p>Tragedy</p>
                    </div>
                </div>
            </div>}

        </nav>
    )
}

export default Navbar
