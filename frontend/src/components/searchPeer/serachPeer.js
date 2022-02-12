import React from 'react'
import "./searchPeer.css"
export default function SearchPeerPage() {
    return (
        <div>
            <header>
                <div className="search-container">
                    <div className="row">
                        <h1>Twitch tv Status</h1>
                    </div>
                    <div className="row">
                        <p>Find out if your favorite streamers are online</p>
                    </div>
                </div>
            </header>

            <div id="listado" className="search-container">

                <div className="row search-row">
                    <div className="col-xs-12">
                        <form method="post" action="">
                            <input type="text" className="text-input" id="filter" value="" placeholder="Search user" />
                        </form>
                    </div>
                </div>

                <div className="row selectors-row">
                    <div className="col-xs-12">
                        <div className="btn-group" role="group" aria-label="Select users by status">
                            <button id="all-users" type="button" className="btn btn-default">ALL</button>
                            <button id="online-users" type="button" className="btn btn-default">ONline</button>
                            <button id="offline-users" type="button" className="btn btn-default">OFFline</button>
                        </div>
                    </div>
                </div>


            </div>

            <footer>
                <div className="search-container">
                    <div className="row">
                        <p>Coded by F. Cortés for the free Code Camp Front-End Development certification. 2016.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
