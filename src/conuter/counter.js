import React ,{useState} from "react";
import styles from './counter.module.css'
function Counter()
{
    const [counter,setCounter]=useState(0);
    const increse=()=>
    {
        setCounter(counter+1)
    }
    const decrese=()=>
    {
        setCounter(counter-1)
    }
    const reset=()=>
    {
        setCounter(0)
    }

    return(
        <div className={styles.counterContainer}>
            <p className={styles.counterDisplay}>
                {counter}
            </p>
            <button className={styles.counterBtn}onClick={decrese}>
                decrese
            </button>
            <button className={styles.counterBtn} onClick={reset}>
                reset
            </button>
            <button className={styles.counterBtn} onClick={increse}>
                increse
            </button>

        </div>



    )

}
export default Counter