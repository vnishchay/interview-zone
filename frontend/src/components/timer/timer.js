import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useEffect } from 'react';



export function MyTimer({ time }) {


  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ seconds: 1200, onExpire: () => console.warn('onExpire called') });

  useEffect(() => {
    start()

  }, [])

  return (
    // <div style={{ display: inline0 }}>

    <div >
      <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>


      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      {/* <button onClick={resume}>Resume</button> */}
    </div>

  );
}

