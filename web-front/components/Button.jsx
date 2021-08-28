function Button( props ){
    const create = async (e) => {
        e.preventDefault();
        const resp = await fetch("http://localhost:8080/create"); 
        const { roomID } = await resp.json(); 
        props.history.push(`/room/${roomID}`)
    }
    return (

<button onClick={create} type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
     Video
</button>

    )
}

export default CreateRoom ; 