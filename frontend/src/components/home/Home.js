import React, { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
import { useHistory } from "react-router-dom";
import "./_home.css"
import { Link } from "react-router-dom";
const axios = require('axios')
const { headers } = require("../config")

export default function Home() {
    return (
        <div>
            {/* //todo : add signin / sign up button on right corner */}
            <section className="c-section">
                <h2 className="c-section__title"><span>Interview Zone </span></h2>
                <ul className="c-services">
                    <div className="c-services__item">
                        <h3>practice, prepare for interview</h3>
                        <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
                    </div>
                    <div className="c-services__item">
                        <a href="/find-host"> <h3>Take Interview </h3>
                            <button className="raise"> Start Now </button>
                        </a>
                    </div>

                    <div className="c-services__item">
                        <h3>Audio Call feature</h3>
                        <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we&rsquo;re happy to do so.</p>
                    </div>
                    <div className="c-services__item" style={{ background: "#7DEBB7" }}>
                        <h3>Join using Link</h3>
                        <br></br>
                        <div className="inputWithButton">
                            <div className="item">
                                <input className="searchInpt" type="text" placeholder="Join Interview" />
                            </div>
                            <div className="item">
                                <button className="btnSearch btnAqua">

                                    <i className="icon">
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 3.76172H10.6172L7.94531 1.05469L9 0L13.5 4.5L9 9L7.94531 7.94531L10.6172 5.23828H0V3.76172Z" fill="white" />
                                        </svg>
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="c-services__item">
                        <h3>Screen Sharing : future </h3>
                        <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                    </div>
                    <div className="c-services__item">
                        <a href="/find-candidate">
                            <h3>Get Interview Now</h3>
                            <button className="raise">Start Now</button>
                        </a>
                    </div>
                </ul>
            </section>
            {/* <footer> */}
            {/* Design : https://codepen.io/ahmadnasr/pen/KKpvNGY */}
            {/* </footer> */}
        </div>

    );
}
