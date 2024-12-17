import styles from './button.module.css';
function Btn()
{
    let count=0;
        
    // const handleClcik=()=> console.log('ouch');
    const handleClcik=(name)=> {
        if(count<3)
        {
            count++;
            console.log(`${name}, you better stop now! its the ${count} time i tell you`);
            
        }
        else
        {
        console.log(`fuck you ${name}`);

        }
    }
    return(
    <button className={styles.btn} onClick={()=>handleClcik('Zamel')}>
        click me 🫡
    </button>
    )
}
export default Btn;