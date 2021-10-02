import React from 'react'
import "../styles/usertile.css"
export default function UserTile({name}) {
    return (
        <div>
          <div class="grid">
        <div class="card c-1">
            <div class="gif-container gc-1">
                <img src="https://media2.giphy.com/media/11Tsyjflf2xq2A/giphy.gif?cid=ecf05e47t432z3d83ltgthu7btfjeqex1kxvq1nqgwwydxia&rid=giphy.gif&ct=g" alt="party"/>
            </div>
            <li>{name}</li>
            </div>
            </div>
        </div>
    )
}
