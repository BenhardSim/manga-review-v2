import React from 'react'
import classes from "./Footer.module.css"
import logo from "./../../aset/nav-logo2.png"

function Footer() {
    return (
        <section className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.menu}>
                    <h2>MENU</h2>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Favorite</a>
                        </li>
                        <li>
                            <a href="">Recomendation</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.genre}>
                    <h2>GENRE</h2>
                    <div className={classes.genrecont}>
                        <div className={classes.colgenre}>
                            <ul>
                                <li>
                                    <a href="">Action</a>
                                </li>
                                <li>
                                    <a href="">Adventure</a>
                                </li>
                                <li>
                                    <a href="">Comedy</a>
                                </li>
                                <li>
                                    <a href="">Thriler</a>
                                </li>
                                <li>
                                    <a href="">Fantasy</a>
                                </li>
                                <li>
                                    <a href="">Sport</a>
                                </li>
                                <li>
                                    <a href="">School life
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.colgenre}>
                            <ul>
                                <li>
                                    <a href="">Horror</a>
                                </li>
                                <li>
                                    <a href="">Isekai</a>
                                </li>
                                <li>
                                    <a href="">Drama</a>
                                </li>
                                <li>
                                    <a href="">Slice of life</a>
                                </li>
                                <li>
                                    <a href="">Sci-fi</a>
                                </li>
                                <li>
                                    <a href="">Psychological</a>
                                </li>
                                <li>
                                    <a href="">Harem</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.favorite}>
                    <h2>FAVORITE</h2>
                    <ul>
                        <li>
                            <a href="">Kanoko Okarishimasi</a>
                        </li>
                        <li>
                            <a href="">Cuckoo Fiance</a>
                        </li>
                        <li>
                            <a href="">Blue Box</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.brand}>
                    
                    <div className={classes.logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={classes.sosmed}>
                        <h3>Checkout Our Social Media</h3>
                        <a href="" className={classes.sosmedlogo}>
                            <i class="fa fa-instagram fa-2x sosmed-lg" aria-hidden="true"></i>
                        </a>
                        <a href="" className={classes.sosmedlogo}>
                            <i class="fa fa-twitter fa-2x sosmed-lg" aria-hidden="true"></i>
                        </a>
                        <a href="" className={classes.sosmedlogo}>
                            <i class="fa fa-linkedin fa-2x sosmed-lg" aria-hidden="true"></i>
                        </a>
                        <a href="" className={classes.sosmedlogo}>
                            <i class="fa fa-facebook-official fa-2x sosmed-lg" aria-hidden="true"></i>
                        </a>
                    </div>

                </div>
            </div>
            <div className={classes.cpr}>
                <p>Copyright © 2021 Benhard Sim Blog. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer
