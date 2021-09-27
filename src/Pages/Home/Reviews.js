import React from 'react'
import classes from "./Review.module.css"
import img11 from "./../../aset/cover-img/amgami-cover.jpg"
import img1 from "./../../aset/cover-img/cuckoo-cover.jpg"
import img2 from "./../../aset/cover-img/boku-no-hero-cover.jpg"
import img5 from "./../../aset/cover-img/dad-hero-cover.jpg"
import img4 from "./../../aset/cover-img/enen-no-cover.jpg"
import img3 from "./../../aset/cover-img/kuroiwa-cover.jpg"
import img6 from "./../../aset/cover-img/inu-ni-cover.jpg"
import img7 from "./../../aset/cover-img/meguro-san-cover.jpg"
import img8 from "./../../aset/cover-img/remake-cover.jpg"
import img9 from "./../../aset/cover-img/yjk-cover.jpg"
import img10 from "./../../aset/cover-img/shield-hero-cover.jpg"
import img from "./../../aset/cover-img/shaved-cover.jpg"

function Reviews() {
    return (
        <section className={classes.reviews}>
            <div className={classes.container}>
                <div className={classes.row1}>
                    <div className={classes.imgbox}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img1} alt=""/>
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img2} alt=""/>
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img3} alt=""/>
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img4} alt=""/>
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img10} alt=""/>
                    </div>
                </div>
                <div className={classes.row2}>
                    <div className={classes.imgbox}>
                        <img src={img5} alt=""/>
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img6} alt="" />
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img7} alt="" />
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img8} alt="" />
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img9} alt="" />
                    </div>
                    <div className={classes.imgbox}>
                        <img src={img11} alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h1>More Than 1000+ Review !</h1>
                </div>
                <div className={classes.subtit}>
                    <p>From all kind of genre including manhwa and manhua</p>
                </div>
            </div>
        </section>
    )
}

export default Reviews
