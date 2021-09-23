import React from "react";
import heart from "../images/heart.png"
import li from "../images/li.jpg"
import nat from "../images/nat.jpg"
import ho from "../images/ho.jpg"
import an from "../images/an.jpg"

import "./Escapes.css";

const Escapes = () => {
    let p = ">"

    return (
        <>

            <div className="escapesContainer">
                <div className="headerDiv">
                    <h1>Escapes</h1>
                    <button>View more  {p}</button>
                    <a className="viewA">View more {p}</a>
                </div>

                <div className="escapesBoxes">
                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={li} className="mainImage" />
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
                                <h5>18 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$364</h5>
                                <h1>$145</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={nat} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Five-Star Luxury Canterbury Getaway ...</h4>
                            <h5 className="colorB">Terrace Downs Resort</h5>
                            <h5 className="colorG">Terrace Downs Resort</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>156 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5>$700</h5>
                                <h1>$300</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={ho} className="mainImage" />
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
                                <h5>18 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$364</h5>
                                <h1>$145</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={an} className="mainImage" />
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
                                <h5>18 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$364</h5>
                                <h1>$145</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}
export default Escapes
