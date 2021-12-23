import React from 'react'
import "./usertile.css"
export default function UserTile({name}) {
    return (
        <div>
          <div className="grid">
        <div className="card c-1">
            <li>{name}</li>
            </div>
            </div>
        </div>
    )
}
