import React from "react";
import lem from "../images/lem.jpg"
import cara from "../images/cara.jpg"
import chair from "../images/chair.jpg"
import sn from "../images/sn.jpg"
import heart from "../images/heart.png"

import "./house.css";

const House = () => {
    let p = ">"
    return (
        <>
            <div className="houseContainer">
                <div className="headerDiv">
                    <h1>House & Garden</h1>
                    <button>View more  {p}</button>
                    <a className="viewA">View more {p}</a>
                </div>

                <div className="houseBoxes">

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={cara} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Garden Shed Range</h4>
                            <h5 className="colorB">TSB Living</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>7 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5></h5>
                                <h1>$226</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={sn} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Three Cavity Large Cake Mould</h4>
                            <h5 className="colorB">TSB Living</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>6 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5></h5>
                                <h1>$15</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={lem} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Five Metres of Bird Netting</h4>
                            <h5 className="colorB">TSB Living</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>17 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5></h5>
                                <h1>$27</h1>
                            </div>
                        </div>
                    </div>


                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={chair} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Five Metrg garden</h4>
                            <h5 className="colorB">TSB Living</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>85 bought</h5>
                            </div>
                            <div className="rightSide">
                                <h5></h5>
                                <h1>$120</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default House
