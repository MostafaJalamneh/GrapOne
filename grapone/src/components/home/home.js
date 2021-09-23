import React from "react";
import firstPic from "../images/GN1DyBUXXL.png"
import firstBox from "../images/FBox.jpg"
import secondBox from "../images/SBpx.jpg"
import heart from "../images/Plus.png"
import "./home.css";

const Home = () => {

    let p = ">"

    return (
        <>
            <div className="homeContainer">
                <div className="firstDiv">
                    <img src={firstPic} className="firstPic" />
                    <p><font> Covid 19 Update:</font> We encourage you to shop as normal for all your essential products.
                        Non-essentials also available, but shipping delays may occur. No pickup options available. Stay safe NZ!</p>
                </div>

                <div className="secondDiv">
                    <div className="discover">
                        <h1>Discover</h1>
                        <div className="discoverParagraph">
                            <div className="paragraphProp">
                                <p>Featured Auckland deals</p>
                                <p className="stock">121</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Collections</p>
                                <p className="stock">46</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Escapes</p>
                                <p className="stock">71</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Picked for you</p>
                                <p></p>
                            </div>
                            <div className="paragraphProp">
                                <p>Activities, Events & Outdoors</p>
                                <p className="stock">97</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Store</p>
                                <p className="stock">1425</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Restaurants, Bars, Cafes</p>
                                <p className="stock">36</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Beauty, Massage & Spa</p>
                                <p className="stock">196</p>
                            </div>
                            <div className="paragraphProp">
                                <p>House & Garden</p>
                                <p className="stock">170</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Fitness & Sport</p>
                                <p className="stock">36</p>
                            </div>
                            <div className="paragraphProp">
                                <p>Automotive</p>
                                <p className="stock">75</p>
                            </div>
                        </div>
                    </div>

                    <div className="collection">
                        <div className="collectionPOne">
                            <div class="img__wrap">
                                <img src={firstBox} />
                                <p className="img__description">
                                    Annual Pass for Unlimited Entry to Sculptureum Attractions incl.
                                    Galleries &amp; Gardens - Options for up to Four People
                                </p>
                            </div>

                            <h2>Annual Pass to Sculptureum Attractions</h2>
                            <h4 className="sculptureumProp">Sculptureum</h4>
                            <h4 className="matakanaProp">Matakana</h4>
                        </div>
                        <span>From</span>
                        <div className="collectionPTwo">
                            <div className="subCollection">
                                <h4>19 bought</h4>
                            </div>
                            <div className="rightSide">
                                <h4 className="overLine">$99</h4>
                                <h1 className="colorP">$50</h1>
                            </div>
                        </div>
                    </div>

                    <div className="secondBox">
                        <div class="img__wrap">
                            <img src={secondBox} />
                            <p className="img__description">
                                Annual Pass for Unlimited Entry to Sculptureum Attractions incl.
                                Galleries
                            </p>
                        </div>
                        <div className="secondBoxElements">
                            <h3>Grocery Goodies</h3>
                            <p>Multiple deals</p>
                            <button>View Collections  {p} </button>
                        </div>
                    </div>
                </div>

                <div className="messageContainer">
                    <div className="messageHeader">
                        <h2>Get the best deals delivered direct to your inbox each day</h2>
                    </div>
                    <div className="messageElement">
                        <input type="email" placeholder="Enter email address" className="emailInput" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Home