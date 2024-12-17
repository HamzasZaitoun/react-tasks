import React, {useState,useRef,useEffect} from "react";
import Styles from './stopwatch.module.css'
import { string } from "prop-types";
function Stopwatch()
{
    const [isRunning, setIsRunning]=useState(false);
    const[elapsedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);
    useEffect(()=>{
         if(isRunning)
         {
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            },1)
         }
         else {
            clearInterval(intervalIdRef.current);
          }
          return ()=>{
            clearInterval(intervalIdRef.current)
          }
    },[isRunning]);

    function start()
    {
        setIsRunning(true);
        startTimeRef.current=Date.now()- elapsedTime;
    }
    function stop()
    {
        setIsRunning(false);
    }
    function reset()
    {
        setIsRunning(false);
        setElapsedTime(0);
    }
    function formatTime()
    {
        let hours =Math.floor(elapsedTime/(1000*60*60));
        let minutes =Math.floor(elapsedTime/(1000*60)%60);
        let seconds =Math.floor(elapsedTime/(1000)%60);
        let milliseconds =Math.floor((elapsedTime%1000)/10);
        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");

        return (`${hours}:${minutes}:${seconds}:${milliseconds}`);

    }

    return(
        <div className={Styles.stopwatch}>
            <div className={Styles.display}>
            {formatTime()}
            <div className={Styles.controls}>
                <button className={Styles.start} onClick={start}>
                   start 
                </button>
                <button className={Styles.stop} onClick={stop}>
                   stop 
                </button>
                <button className={Styles.reset} onClick={reset}>
                   reset 
                </button>

            </div>

            </div>
        
        </div>
    )
}
export default Stopwatch;