import React from "react";
import knife from "../images/knife.jpg"
import spe from "../images/spe.jpg"
import fah from "../images/fah.jpg"
import town from "../images/town.jpg"
import heart from "../images/heart.png"

import "./store.css";

const Store = () => {
    let p = ">"

    return (
        <>
            <div className="storeContainer">
                <div className="headerDiv">
                    <h1>Stores</h1>
                    <button>View more  {p}</button>
                    <a className="viewA">View more {p}</a>
                </div>

                <div className="storeBoxes">

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={fah} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Two-in-One BBQ Grill & Smoker</h4>
                            <h5 className="colorB">TSB Living</h5>
                            <h5 className="colorG">ergjr</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>5 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5></h5>
                                <h1>$206</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={spe} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Amazon Fire Stick Lite with Alexa</h4>
                            <h5 className="colorB">TSB Living</h5>
                            <h5 className="colorG">Thorndon</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5></h5>
                            </div>
                            <div className="rightSide">
                                <h5></h5>
                                <h1>$80</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={knife} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Bestway Inflatable Two-Person Kayak</h4>
                            <h5 className="colorB">TSB Living</h5>
                            <h5 className="colorG">Thorndon</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>5 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$20</h5>
                                <h1>$14</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={town} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Bestway Inflatable Two-Person Kayak</h4>
                            <h5 className="colorB">TSB Living</h5>
                            <h5 className="colorG">Thorndon</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>5 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$206</h5>
                                <h1>$170</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}
export default Store
