import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./setuppage.css"

export default function SetupPage() {
    const videoRef = useRef(null);
    const { id } = useParams();
    const [isaudio, setisaudio] = useState(true);
    const [isvideo, setisvideo] = useState(true)
    const [stream, setstream] = useState()
    const [constraints, setconstraints] = useState({ audio: isaudio, video: isvideo })
    const [isstarted, setisstarted] = useState(false)
    const getVideo = async () => {
        setisstarted(true);
        await navigator.mediaDevices
            .getUserMedia(constraints)
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                setstream(stream);
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    useEffect(() => {
        getVideo();
    }, [videoRef])


    useEffect(() => {
        if (isstarted) {
            stream.getAudioTracks().forEach(element => element.enabled = !element.enabled);
        }
    }, [isaudio, videoRef])
    useEffect(() => {
        if (isstarted) {
            stream.getVideoTracks().forEach(element => element.enabled = !element.enabled)
        }
    }, [isvideo, videoRef])



    const handleToggleaudio = (e) => {
        e.preventDefault();
        setisaudio(!isaudio);
        return isaudio;
    }

    const handleTogglevideo = (e) => {
        e.preventDefault();
        setisvideo(!isvideo);
        return isvideo;
    }


    return (
        <div className='setuppage'>
            <div className='component'>
                <video className='local-video' ref={videoRef} />
                <div className='col'>
                    <div className='row'>
                        {isvideo && <button className='slide setup-button row' onClick={handleTogglevideo}><img className='setup-button' src='/images/video.png'></img></button>}
                        {!isvideo && <button className='slide setup-button row' onClick={handleTogglevideo}><img className='setup-button' src='/images/novideo.png'></img></button>}
                        {isaudio && <button className='slide setup-button row' onClick={handleToggleaudio}><img className='setup-button' src='/images/microphone.png'></img></button>}
                        {!isaudio && <button className='slide setup-button row' onClick={handleToggleaudio}><img className='setup-button' src='/images/mute.png'></img></button>}
                    </div>
                    <Link
                        to={{
                            pathname: `/interview/${id}`,
                            state: { constraints: constraints }
                        }}
                    >
                        <button className='offset joinbutton'  > Join Now </button>
                    </Link>
                </div>
            </div>
        </div >
    )
}