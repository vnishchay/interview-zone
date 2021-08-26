import React from "react" ;

const CreateRoom = (props)=>{
    const create = async (e)  =>{
        console.log("all good? ")
        e.preventDefault(); 
        console.log("how about now")
        const resp = await fetch("http://localhost:8080/create"); 
        console.log("now its working")
        const {roomID} = await resp.json(); 
        props.history.push('/room/${roomID}')
    }; 

    return (
        <div>
               <button onClick={create}>CreateRoom</button>
        </div>
    )
}

export default CreateRoom; 