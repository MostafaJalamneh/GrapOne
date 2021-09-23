import React from "react";
import boat from "../images/boat.jpg"
import gw from "../images/gw.jpg"
import mou from "../images/mou.jpg"
import tab from "../images/tab.jpg"
import heart from "../images/heart.png"

import "./activities.css";

const Activities = () => {
    let p = ">"

    return (
        <>
            <div className="activitiesContainer">
                <div className="headerDiv">
                    <h1>Activities, Events & Outdoors</h1>
                    <button>View more  {p}</button>
                    <a className="viewA">View more {p}</a>
                </div>

                <div className="activitiesBoxes">

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={boat} className="mainImage" />
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
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={gw} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>SSI Spearfishing Charter Package</h4>
                            <h5 className="colorB">SSI Spearfishing Charter Package</h5>
                            <h5 className="colorG">Thorndon</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>18 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$375</h5>
                                <h1>$239</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={mou} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Atura Wellington Hotel Stay for Two ..</h4>
                            <h5 className="colorB">Atura Wellington</h5>
                            <h5 className="colorG">Thorndon</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>85 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$46</h5>
                                <h1>$20</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={tab} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Atura Wellington  Stay for Two Hotel </h4>
                            <h5 className="colorB">Atura Wellington</h5>
                            <h5 className="colorG">Thorndon</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>69 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$85</h5>
                                <h1>$42</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}
export default Activities
