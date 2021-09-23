import React from "react";
import women from "../images/wom.jpg"
import tip from "../images/tip.jpg"
import health from "../images/health.jpg"
import ess from "../images/ess.jpg"


import "./collection.css";

const Collection = () => {

    let p = ">"

    return (
        <>
            <div className="collectionContainer">
                <div className="headerDiv">
                    <h1>Collections</h1>
                    <button>View more  {p}</button>
                    <a className="viewA">View more {p}</a>
                </div>
                <div className="collectionBoxes">
                    <div className="collectionBox">
                        <div class="img__wrap">
                            <img src={women} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <div className="boxContent">
                            <h3>Work From Home</h3>
                            <h5>Multiple deals</h5>
                            <button>View Collections  {p}</button>
                        </div>
                    </div>

                    <div className="collectionBox">
                        <div class="img__wrap">
                            <img src={tip} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <div className="boxContent">
                            <h3>Tasty Tipples</h3>
                            <h5>Multiple deals</h5>
                            <button>View Collections  {p}</button>
                        </div>
                    </div>

                    <div className="collectionBox">
                        <div class="img__wrap">
                            <img src={health} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <div className="boxContent">
                            <h3>Health & wellbeing</h3>
                            <h5>Multiple deals</h5>
                            <button>View Collections  {p}</button>
                        </div>
                    </div>

                    <div className="collectionBox">
                        <div class="img__wrap">
                            <img src={ess} className="mainImage" />
                            <p className="img__description">
                                HelloFresh Special Offer
                            </p>
                        </div>
                        <div className="boxContent">
                            <h3>Everyday Essentials Delivery</h3>
                            <h5>Multiple deals</h5>
                            <button>View Collections  {p}</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Collection