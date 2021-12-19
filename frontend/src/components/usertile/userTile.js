import React from 'react'
import "userTile.css"
export default function UserTile({name}) {
    return (
        <div>
          <div class="grid">
        <div class="card c-1">
            <li>{name}</li>
            </div>
            </div>
        </div>
    )
}
