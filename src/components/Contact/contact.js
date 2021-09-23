import React from "react";
import youtube from "../images/youtube-symbol.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook-logo.png"
import smartphone from "../images/smartphone.png"
import nzme from "../images/nzme.png"

import "./contact.css";

const Contact = () => {

    return (
        <>
            <div className="containerDiv">
                <div className="newsletterM">
                    <h4 className="headerP">Newsletter Signup</h4>
                    <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                    <div className="emailElement">
                        <input type="email" placeholder="Enter email address" className="emailInputT" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="contactColumn">
                    <div className="followDiv">
                        <h4 className="headerP">Follow us on</h4>
                        <div className="iconDiv">
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={instagram} />
                            <img src={youtube} />
                        </div>
                        <h4>Get app exclusive deals</h4>
                        <div className="buttonDiv">
                            <button> <img src={smartphone} /> Download Our App</button>
                        </div>
                    </div>
                    <div className="grabOne">
                        <h4 className="headerP">Grab One</h4>
                        <div className="grabMenu">
                            <h4>GrabOne Guarantee</h4>
                            <h4>Contact Us</h4>
                            <h4>About Us</h4>
                            <h4>Terms & Returns</h4>
                            <h4>Blog</h4>
                            <h4>Gift Cards</h4>
                        </div>
                    </div>

                    <div className="myAccount">
                        <h4 className="headerP">My Account</h4>
                        <div className="grabMenu">
                            <h4>My Account</h4>
                            <h4>My Cart</h4>
                            <h4>My Coupons</h4>
                            <h4>FAQ</h4>
                        </div>
                    </div>

                    <div className="merchants">
                        <h4 className="headerP">Merchants</h4>
                        <div className="grabMenu">
                            <h4>Run a Deal</h4>
                            <h4>Merchant Centre</h4>
                        </div>
                    </div>

                    <div className="newsletter">
                        <h4 className="headerP">Newsletter Signup</h4>
                        <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                        <div className="emailElement">
                            <input type="email" placeholder="Enter email address" className="emailInputT" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                </div>

                <div className="copyRight">
                    <div className="privacyDiv">
                        <h4>Privacy Policy</h4>
                        <p>© 2021 GrabOne Limited</p>
                    </div>
                    <div className="poweredDiv">
                        <img src={nzme} />
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact
