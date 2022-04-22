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
             //todo : add signin / sign up button on right corner
            <section class="c-section">
                <h2 class="c-section__title"><span>Interview Zone </span></h2>
                <ul class="c-services">
                    <li class="c-services__item">
                        <h3>practice, prepare for interview</h3>
                        <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
                    </li>
                    <li class="c-services__item">
                        <a href="/find-host"> <h3>Take Interview </h3>
                            <button className="raise"> Start Now </button>
                        </a>
                    </li>

                    <li class="c-services__item">
                        <h3>Audio Call feature</h3>
                        <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we&rsquo;re happy to do so.</p>
                    </li>
                    <li class="c-services__item">
                        <h3>Video Call feature</h3>
                        <p>If you don&rsquo;t know what kind of service to request from us, don&rsquo;t worry. We can help and see what fits your business and your budget.</p>
                    </li>
                    <li class="c-services__item">
                        <h3>Screen Sharing : future </h3>
                        <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
                    </li>
                    <li class="c-services__item">
                        <a href="/find-candidate">
                            <h3>Get Interview Now</h3>
                            <button className="raise">Start Now</button>
                        </a>
                    </li>
                </ul>
            </section>
            <footer>
                Design : https://codepen.io/ahmadnasr/pen/KKpvNGY
            </footer>
        </div>

    );
}
