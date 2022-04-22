import React, { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
import { useHistory } from "react-router-dom";
import "./home.css"
import { Link } from "react-router-dom";
const axios = require('axios')
const { headers } = require("../config")

export default function FindCandiate() {
    const [link, setlink] = useState("");
    const auth = useAuth();
    const [email, setemail] = useState();
    const history = useHistory();
    const joinmeet = useRef("");
    const [loading, setloading] = useState()
    const [interview, setinterview] = useState();

    useEffect(() => {
        if (localStorage.getItem("jwt") == undefined || auth.user === undefined) {
            setemail("guest");
        } else {
            setemail(auth.user.email);
        }
    }, [auth]);

    const data =
    {
        "typeOfInterview": "Job",
        "numberOfQuestions": 8,
        "levelOfQuestions": "medium",
        "interviewID": link,
        "idOfHost": auth.user.userid
    }

    const route = (e) => {
        e.preventDefault();
        history.push(link);
    };

    const joinMeet = (e) => {
        e.preventDefault();
        history.push(joinmeet.current.value);
    };
    const interviewID = v4();

    const handleLogout = () => {
        auth.logout();
        history.push('/')


    }

    const saveInterviewData = async () => {
        setloading(true)
        try {
            axios.post("http://localhost:3001/interview/create", data, headers).then((res) => {
                setinterview(res.data.data);
                setloading(false)
            })
        } catch (err) {
            console.log("Can't Create an Interview" + err)
            setloading(false)
        }
    }

    useEffect(() => {
        saveInterviewData();
    }, [])


    return (
        <div className="homepage">
            <main>
                <div className="box1">
                    <img className="img-hm" src="images/undraw_positive_attitude_re_wu7d.svg"></img>
                    <div className="card" id="col1">
                        <div>
                            <div>
                                <h1> Place Interview Request </h1>
                                <button className="offset"> Submit Request </button>
                            </div>
                            <div justify="center">
                                <div >
                                    <button
                                        className="raise"
                                        onClick={() => navigator.clipboard.writeText(link)} y>
                                        {link !== ""
                                            ? "http://localhost:3000" + link
                                            : "Create Link"}
                                    </button>
                                    <div className="mb-2">

                                    </div>
                                    <div></div>
                                </div>
                            </div>

                            <div container spacing={2} justifyContent="center">
                                {!loading ? <button
                                    className="raise"

                                    onClick={() => {
                                        setlink(`/setup/${interviewID}`)
                                        saveInterviewData();
                                    }}
                                >
                                    Create Interview
                                </button> : <img src="/images/buffering.png"></img>}
                            </div>
                            <div container spacing={2} justifyContent="center">
                                {!loading && <button
                                    className="raise"
                                    onClick={route}>
                                    Go to interview
                                </button>
                                }
                            </div>
                            {!loading && <div className="bx-jnm" >
                                <input className="inp-hm" ref={joinmeet}></input>
                                <button
                                    className="raise btn-meet"
                                    onClick={joinMeet}
                                >
                                    Join Meet
                                </button>
                            </div>
                            }
                            <Link to={'/setupInterview'}> <button className="offset"> Setup Interview </button>  </Link>
                        </div>
                    </div>
                </div>
                <div maxWidth="md"></div>
            </main>
        </div>

    );
}

