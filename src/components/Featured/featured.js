import React from "react";
import doctor from "../images/doc.jpg"
import fresh from "../images/fresh.jpg"
import town from "../images/town.jpg"
import cc from "../images/cc.jpg"
import house from "../images/house.jpg"
import hand from "../images/hand.jpg"
import car from "../images/car.jpg"
import veg from "../images/veg.jpg"
import heart from "../images/Plus.png"
import "./featured.css";


const Featured = () => {

    let p = ">"

    return (
        <>
            <div className="fContainer">
                <div className="headerDiv">
                    <h1>Featured Auckland deals </h1>
                    <button>View more  {p}</button>
                    <a className="viewA">View more {p}</a>
                </div>
                <div className="boxesDiv">
                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={doctor} className="mainImage" />
                            <p className="img__description">
                                Dental Exam, Two X-Rays, Scale & Polish
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Dental Exam, Two X-Rays, Scale & Polish ...</h4>
                            <h5 className="colorB">Dentists on Birkenhead</h5>
                            <h5 className="colorG">Birkenhead</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>11 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$225</h5>
                                <h1>$79</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={fresh} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>HelloFresh Special Offer</h4>
                            <h5 className="colorB">HelloFresh</h5>
                            <h5 className="colorG">lorem</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>161 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$129.88</h5>
                                <h1>$89.89</h1>
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
                            <h4>Central Queenstown Stay for Two People ..</h4>
                            <h5 className="colorB">Rydges Lakeland Resort Queenstown</h5>
                            <h5 className="colorG">Queentown</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>53 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$402</h5>
                                <h1>$179</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={cc} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Auckland Craft Beer Urban Tasting Tour ..</h4>
                            <h5 className="colorB">Auckland Scenic Tours Ltd</h5>
                            <h5 className="colorG">Auckland</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5></h5>
                            </div>

                            <div className="rightSide">
                                <h1>$129</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={house} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Auckland Craft Beer Urban Tasting Tour ..</h4>
                            <h5 className="colorB">Auckland Scenic Tours Ltd</h5>
                            <h5 className="colorG">Auckland</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>85 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$402</h5>
                                <h1>$179</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={hand} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Auckland Craft Beer Urban Tasting Tour ..</h4>
                            <h5 className="colorB">Auckland Scenic Tours Ltd</h5>
                            <h5 className="colorG">Auckland</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>50 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$180</h5>
                                <h1>$115</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={veg} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Auckland Craft Beer Urban Tasting Tour ..</h4>
                            <h5 className="colorB">Auckland Scenic Tours Ltd</h5>
                            <h5 className="colorG">Auckland</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5>88 bought</h5>
                            </div>

                            <div className="rightSide">
                                <h5>$782</h5>
                                <h1>$541</h1>
                            </div>
                        </div>
                    </div>

                    <div className="boxProb">
                        <div class="img__wrap">
                            <img src={car} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <img src={heart} className="subImage" />
                        <div className="contentDescription">
                            <h4>Auckland Craft Beer Urban Tasting Tour ..</h4>
                            <h5 className="colorB">Auckland Scenic Tours Ltd</h5>
                            <h5 className="colorG">Auckland</h5>
                        </div>
                        <span>from</span>
                        <div className="bottomDiv">
                            <div className="leftSide">
                                <h5></h5>
                            </div>

                            <div className="rightSide">
                                <h1>$129</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Featured