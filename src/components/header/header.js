import React from "react";
import locationIcon from "../images/pin.png"
import arrowIcon from "../images/arrow-down-sign-to-navigate.png"
import favorite from "../images/favorite.png"
import cartIcon from "../images/cart.png"
import personIcon from "../images/user.png"
import emailIcon from "../images/mail.png"
import homeM from "../images/homeM.png"
import userM from "../images/userM.png"
import cartM from "../images/cartM.png"
import squareM from "../images/squareM.png"
import loupeM from "../images/loupeM.png"
import blueArrow from "../images/blueArrow.png"
import nzm from "../images/powered_by_nzme_short.22da364cd455.png"
import "./header.css";

const Header = () => {

    let p = ">"

    return (
        <>
            <div className="navContainer">
                <div className="leftNav">
                    <h1>GrapOne</h1>
                </div>
                <div className="rightNav">
                    <div className="locationDiv">
                        <img src={locationIcon} className="locationIcon" />
                        <ul class="animenu__nav">
                            <li className="mainCity"><a class="animenu__nav__hasDropdown" aria-haspopup="true">Auckland</a>
                                <ul class="animenu__nav__dropdown" aria-label="submenu">
                                    <li><a>Amman</a></li>
                                    <li><a>Dubai</a></li>
                                    <li><a>Cairo</a></li>
                                    <li><a>Doha</a></li>
                                    <li><a>Damas</a></li>
                                </ul></li></ul>
                        <img src={arrowIcon} className="arrowIcon" />
                    </div>
                    <img src={favorite} className="locationIcon media" />
                    <img src={cartIcon} className="locationIcon media" />
                    <ul class="animenu__nav media">
                        <li className="mainCity"><a class="animenu__nav__hasDropdown" aria-haspopup="true"><div className="locationDiv">
                            <img src={personIcon} className="locationIcon" />
                            <img src={arrowIcon} className="arrowIcon" />
                        </div></a>
                            <ul class="animenu__nav__dropdown" aria-label="submenu">
                                <li><a>My Account</a></li>
                                <li><a>Gifts</a></li>
                                <li><a>Profile</a></li>
                                <li><a>My Subscriptions</a></li>
                                <li><a>My Purchases</a></li>
                                <li><a>Login</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mailDiv media">
                        <img src={emailIcon} />
                        <p>Subscribe</p>
                    </div>
                    <div className="poweredDiv media">
                        <img src={nzm} />
                    </div>
                </div>
            </div>
            <div className="secondNav">
                <div className="leftSNav">
                    <div className="browseDiv">
                        <ul class="nav-links">
                            <li>
                                <a href="#" class="desktop-item">Browse Categories</a>
                                <img src={blueArrow} className="blueArrow" />
                                <label for="showMega" class="mobile-item">Browse Categories</label>
                                <div class="mega-box">
                                    <div class="content">
                                        <div class="row rowBorder">
                                            <ul class="mega-links">
                                                <div className="test"><li><a href="#">Activities, Events & Outdoors</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Baby, Kids & Toys</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Automotive</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">adgsf esdvvv</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Beauty, Massage & Spa</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">peple, dp,pds s</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem ipsum dolor sit amet.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem, ipsum dolor.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem ipsum dolor sit.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem, ipsum.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem, ipsum.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem ipsum dolor sit amet</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem ipsum dolor sit.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem, ipsum.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem ipsum dolor sit.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">Lorem ipsum dolor sit amet.</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">ad ojgosp</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">lobcj</a></li><p>{p}</p></div>
                                                <div className="test"><li><a href="#">aawaf</a></li><p>{p}</p></div>
                                            </ul>
                                        </div>
                                        <div class="row rowPad">
                                            <header>Activities, Events & Outdoors</header>
                                            <ul class="mega-links">
                                                <li><a href="#">Adventure & Outdoors</a>
                                                    <p className="menuPara">  Bungy Jumping, Camping, Horse Riding, Hunting</p></li>
                                                <li><a href="#">Fun & Leisure</a>
                                                    <p className="menuPara">Amusement Parks, Bowling, Bus & Boat Tou</p></li>
                                                <li><a href="#">Kids Activities</a>
                                                    <p className="menuPara"> Kid's Camps, Kid's Classes, Kid's Shows, Play Cen</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <h4>What's New</h4>
                    <h4>Trending</h4>
                    <h4>For You</h4>
                    <h4>Shop Products</h4>
                </div>
                <div className="searchSide">
                    <input type="text" placeholder="Search GrapOne" className="searchInput"></input>
                </div>
            </div>
            <div className="bottomMenuDiv">
                <ul className="bottomMenu">
                    <li><a target="_blank"><div className="mobileMenu">
                        <img src={homeM} />
                        <h6>Home</h6>
                    </div> </a></li>

                    <li><a target="_blank"><div className="mobileMenu">
                        <img src={loupeM} />
                        <h6>Search</h6>
                    </div> </a></li>

                    <li><a target="_blank"><div className="mobileMenu">
                        <img src={squareM} />
                        <h6>Categories</h6>
                    </div> </a></li>

                    <li><a target="_blank"><div className="mobileMenu">
                        <img src={cartM} />
                        <h6>Cart</h6>
                    </div> </a></li>

                    <li><a target="_blank"><div className="mobileMenu">
                        <img src={userM} />
                        <h6>Account</h6>
                    </div> </a></li>

                </ul>
            </div>
        </>
    )

}
export default Header;

