import React , {useState,useEffect} from 'react';
import styles from './clock.module.css'

function Clock()
{
 
    const [time, setTime]=useState(new Date());

    useEffect(()=>{
        const intervals=setInterval(()=>
            {
                setTime(new Date())
            },1000);
            return ()=>{clearInterval(intervals)}
    }
    ,[])
    function formatDay()
    {
        const day=time.getDate();
        const month=time.getMonth()+1;
        const year=time.getFullYear();
        return (`${day}/${month}/${year}`)
    }
    function formatTime()
    {
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const ampm= hours>=12?'pm':'am';
        hours=hours%12||12;
        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`)
    }
    function padZero(number)
    {
        return (number<10?"0":"")+number;
    }
    

return(
    <div className={styles.clockContainer}>
        <div className={styles.clock}>
            <span className={styles.time}>
                {formatDay()}
            </span>
            <br></br>
            <span className={styles.time}>
                {formatTime()}
            </span>

        </div>
    </div>
)
}
export default Clock;