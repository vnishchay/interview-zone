import React from 'react'
import Chat from "./chat"
import { useState, useEffect } from 'react'
import sock from '..'
import { useParams } from 'react-router'
export default function CommChannels() {
     const {id: chatID} = useParams(); 
    const [socket, setsocket] = useState()
    useEffect(() => {
        const s = sock ; 
        setsocket(s)
        return () => {
            s.disconnect(); 
        }
    }, [])


    return (
        <div>
            <Chat/>
        </div>
    )
}


