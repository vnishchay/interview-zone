import NavBar from "../components/NavBar";
import UserAvatar from "../components/UserAvatar";

export default function InterViewPage()
{
    return (
        <div className="bg-gray-400 w-full h-full absolute">
        <div>
        <NavBar/>
        </div>
        <div className="w-full bg-yellow-100 h-screen flex flex-row">
            {/* this  is root for all below components */}
            <div className="w-1/2 h-screen bg-yellow-400">
                {/* this going to be the document */}
            </div>
            <div className="bg-yellow-800 w-1/2 h-screen flex-col">
                {/* this is going to be the communication channel */}
                <div className="bg-green-700 w-full h-1/2 flex flex-auto">
                    <div className="w-1/2 bg-purple-700">

                    </div>

                    <div className="w-1/2 bg-pink-600 flex flex-row justify-end">
                       <div>
                       <UserAvatar></UserAvatar>
                       </div>
                       <di>
                       <UserAvatar></UserAvatar>
                       </di>
                     
                   

</div>
                </div>

                <div className="bg-blue-700 w-full h-1/2 flex-row flex">
                <div className="w-1/2 bg-white">

</div>

<div className="w-1/2 bg-green-600">

</div>

</div>
              
            </div>
            
        </div>
         
        </div>
    ); 
}